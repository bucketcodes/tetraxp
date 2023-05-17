import * as React from "react";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillBehanceCircle,
} from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/Md";

const ContactPage = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [captchaToken, setCaptchaToken] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!captchaToken) {
        setStatus("Please complete the reCAPTCHA challenge.");
        return;
      }

      const response = await fetch("https://localhost:3001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message, captchaToken }),
        mode: "cors", // add this line to enable CORS
      });

      const data = await response.json();
      if (response.ok) {
        setStatus(data.success);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setStatus(data.error || "Failed to send email.");
      }
    } catch (error) {
      console.error("Error while sending email:", error);
      setStatus("Failed to send email.");
    }
  };

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/enterprise.js?render=6LcsleklAAAAAM4df81x6rJaMHH_1JEFztpyzZnK";
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.grecaptcha.enterprise.ready(() => {
        window.grecaptcha.enterprise
          .execute("6LcsleklAAAAAM4df81x6rJaMHH_1JEFztpyzZnK", {
            action: "submit",
          })
          .then((token) => {
            setCaptchaToken(token);
          });
      });
    };
  }, []);

  return (
    <div className="flex flex-col  w-4/5 max-w-sm mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-900 shadow-md rounded p-4 mb-2"
      >
        <div className="mb-2">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="text-sm placeholder:text-xs placeholder:text-neutral-600 placeholder:font-bold bg-neutral-800 border-black shadow appearance-none border rounded w-full py-2 px-3 text-neutral-400 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Name"
          />
        </div>
        <div className="mb-2">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-2 text-sm placeholder:text-xs placeholder:text-neutral-600 placeholder:font-bold bg-neutral-800 border-black shadow appearance-none border rounded w-full py-2 px-3 text-neutral-400 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
          />
        </div>
        <div className="mb-2">
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-2 text-sm placeholder:text-xs placeholder:text-neutral-600 placeholder:font-bold bg-neutral-800 border-black shadow appearance-none border rounded w-full py-2 px-3 text-neutral-400 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Phone"
          />
        </div>
        <div className="mb-2">
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-2 text-sm placeholder:text-xs placeholder:text-neutral-600 placeholder:font-bold bg-neutral-800 border-black shadow appearance-none border rounded w-full py-2 px-3 text-neutral-400 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Message"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="text-xs bg-neutral-950 hover:bg-neutral-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
            disabled={!captchaToken}
            id="recaptcha-container"
          >
            Send
          </button>
          {status && <p className="text-green-500 text-sm">{status}</p>}
        </div>
      </form>

      {captchaToken && <div className="mt-4" id="recaptcha-container"></div>}

      {captchaToken && (
        <div className="">
          <p className="text-xs text-center">
            reCAPTCHA protected.
            <a
              className="text-neutral-600 hover:text-neutral-400"
              href="https://policies.google.com/privacy"
            >
              {" "}
              <b>Privacy Policy</b>
            </a>{" "}
            &
            <a
              className="text-neutral-600 hover:text-neutral-400"
              href="https://policies.google.com/terms"
            >
              {" "}
              <b>ToS</b>
            </a>{" "}
            apply.
          </p>
        </div>
      )}
      <div className="flex flex-col items-center">
        <div className="flex space-x-4 mt-6 mb-8">
          <a
            aria-label="Instagram"
            href="https://www.instagram.com/tetra.eth/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors duration-300"
          >
            <AiFillInstagram className="w-6 h-6" />
          </a>
          <a
            aria-label="Twitter"
            href="https://twitter.com/tetragocommando"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors duration-300"
          >
            <AiFillTwitterCircle className="w-6 h-6" />
          </a>
          <a
            aria-label="Facebook"
            href="https://www.facebook.com/tetraxp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors duration-300"
          >
            <MdOutlineFacebook className="w-6 h-6" />
          </a>
          <a
            aria-label="Behance"
            href="https://www.behance.net/tetraxp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors duration-300"
          >
            <AiFillBehanceCircle className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

export const Head = () => <title>Contact</title>;

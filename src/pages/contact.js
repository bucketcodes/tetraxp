import * as React from "react";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillBehanceCircle,
} from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import { motion } from "framer-motion";
import threads from "../assets/threads.svg";
import { ReactSVG } from "react-svg";

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

      const response = await fetch("https://tetraxp.com/contact", {
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
      setStatus("Failed.");
    }
  };

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/enterprise.js?render=6LcsleklAAAAAM4df81x6rJaMHH_1JEFztpyzZnK";
    script.defer = true;
    script.async = true; // Add the async attribute for improved performance
    script.onerror = () => {
      console.error("Failed to load reCAPTCHA script.");
    };

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

  const ThreadsIcon = ({ className }) => {
    return (
      <ReactSVG
        aria-label="Threads Icon"
        src={threads}
        type="image/svg+xml"
        alt="Threads Icon"
        className={`fill-neutral-500 hover:fill-white transition-colors duration-300 !w-[1.42rem] !h-6`}
      />
    );
  };

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/tetraxp",
      icon: AiFillInstagram,
    },
    {
      label: "Threads",
      href: "https://www.threads.net/@tetraxp",
      icon: ThreadsIcon,
    },
    {
      label: "Twitter",
      href: "https://twitter.com/tetragocommando",
      icon: AiFillTwitterCircle,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/tetraxp",
      icon: MdOutlineFacebook,
    },
    {
      label: "Behance",
      href: "https://www.behance.net/tetraxp",
      icon: AiFillBehanceCircle,
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <div className="flex space-x-7 mb-6 items-center">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              aria-label={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors duration-300"
            >
              <link.icon className="w-7 h-7" />
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col max-w-lg mx-auto shadow-lg">
        <form
          onSubmit={handleSubmit}
          className="bg-neutral-900 shadow-md rounded-lg p-4 mb-2"
        >
          <div className="mb-4">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="block p-2.5 w-full text-sm rounded-lg border bg-neutral-800 border-black placeholder:font-bold placeholder:text-neutral-600 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block p-2.5 w-full text-sm rounded-lg border bg-neutral-800 border-black placeholder:font-bold placeholder:text-neutral-600 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="block p-2.5 w-full text-sm rounded-lg border bg-neutral-800 border-black placeholder:font-bold placeholder:text-neutral-600 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Phone"
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="4" className="block p-2.5 w-full text-sm rounded-lg border bg-neutral-800 border-black placeholder:font-bold placeholder:text-neutral-600 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Message"
            />
          </div>
          <div className="flex items-center justify-between">
            {captchaToken && (
              <button
                type="submit"
                className="font-bold rounded-lg bg-neutral-800 text-white w-full text-sm py-2 px-3 mt-2 mb-1 text-center block hover:bg-red-500 transition-colors duration-300"
                disabled={!captchaToken}
                id="recaptcha-container"
              >
                Send Message
              </button>
            )}
            {status && <p className="text-green-500 text-sm">{status}</p>}
          </div>
        </form>
        <div className="flex flex-col items-center">
          <div className="mt-4">
            <p className="text-sm text-center">
              reCAPTCHA protected. {"("}
              <a
                className="text-neutral-600 hover:text-neutral-400"
                href="https://policies.google.com/privacy"
              >
                {""}
                <b>Privacy Policy</b>
              </a>{" "}
              &
              <a
                className="text-neutral-600 hover:text-neutral-400"
                href="https://policies.google.com/terms"
              >
                {" "}
                <b>ToS</b>
              </a>
              {")"}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;

export const Head = () => (
  <>
    <title>TETRA - Contact Me / Inquiries</title>
    <meta name="description" content="Feel free to connect for any insights, desires, inquiries, or ideas involving art, life, or collaborations. Feedback and suggestions are always welcome." />
    <meta name="keywords" content="TETRA, contact, about, art" />
    <meta name="author" content="Tetra, John Perez" />
    <meta name="robots" content="index, follow" />
  </>
)

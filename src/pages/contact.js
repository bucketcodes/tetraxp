import * as React from "react";

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
  
      const response = await fetch('https://localhost:3001/contact', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message, captchaToken }),
        mode: 'cors' // add this line to enable CORS
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
    script.src = "https://www.google.com/recaptcha/enterprise.js?render=6LcsleklAAAAAM4df81x6rJaMHH_1JEFztpyzZnK";
    script.defer = true;
    document.head.appendChild(script);
  
    script.onload = () => {
      window.grecaptcha.enterprise.ready(() => {
        window.grecaptcha.enterprise.execute('6LcsleklAAAAAM4df81x6rJaMHH_1JEFztpyzZnK', {action: 'submit'}).then((token) => {
          setCaptchaToken(token);
        });
      });
    };
  }, []);

  return (
    
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="bg-neutral-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-2">
          <label htmlFor="name" className="block text-neutral-500 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-neutral-800 border-black shadow appearance-none border rounded w-full py-2 px-3 text-neutral-400 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="block text-neutral-500 font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-neutral-800 border-black shadow appearance-none border rounded w-full py-2 px-3 text-neutral-400 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="phone" className="block text-neutral-500 font-bold mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-neutral-800 border-black shadow appearance-none border rounded w-full py-2 px-3 text-neutral-400 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-neutral-500 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="bg-neutral-800 border-black shadow appearance-none border rounded w-full py-5 px-3 text-neutral-400 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
      <button
        type="submit"
        className="bg-neutral-950 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        disabled={!captchaToken}
      >
        Send Message
      </button>
      {status && (
        <p className="text-green-500 text-sm">{status}</p>
      )}
    </div>
    {captchaToken && (
      <div className="mt-4" id="recaptcha-container"></div>
    )}
      </form>
      {captchaToken && (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-950 text-neutral-500 font-bold py-2 px-4">
      <p className="text-sm">
        This site is protected by reCAPTCHA and the Google
        <a className="text-neutral-600 hover:text-neutral-400" href="https://policies.google.com/privacy"> <b>Privacy Policy</b></a> and
        <a className="text-neutral-600 hover:text-neutral-400" href="https://policies.google.com/terms"> <b>Terms of Service</b></a> apply.
      </p>
    </div>
  )}
    </div>
  );
};

export default ContactPage;

export const Head = () => <title>Contact</title>;
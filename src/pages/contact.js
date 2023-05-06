import * as React from "react";

const ContactPage = () => {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/contact', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus(data.success);
        setEmail("");
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
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("Status:", status);
  }, [email, message, status]);

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="bg-neutral-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="email" className="block text-neutral-500 font-bold mb-2">
            Email
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
        <div className="mb-6">
          <label htmlFor="message" className="block text-neutral-500 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="bg-neutral-800 border-black shadow appearance-none border rounded w-full py-2 px-3 text-neutral-400 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-neutral-950 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
          {status && (
            <p className="text-green-500 text-sm">{status}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactPage;

export const Head = () => <title>Contact</title>;
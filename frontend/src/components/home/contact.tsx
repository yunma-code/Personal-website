import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../../tailwind.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    emailjs
      .sendForm("service_15pcu43", "template_74v9w78", form, "jpI50jt1j2bQIT96E")
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setStatus("There was an error sending your message.");
        }
      );
  };

  return (
    <>
      <div className="max-w-3xl ml-0 mr-auto p-6 bg-gray-900 bg-opacity-0 hover:bg-opacity-100 transition duration-300 text-white rounded-lg">
        <h1 className="text-3xl font-semibold mb-4">Contact</h1>
        <h2 className="text-base"> Feel free to reach out for any inquiries or collaboration!</h2>
        <div className="flex gap-5 place-items-start">
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className="w-full mt-2 p-2 bg-gray-800 text-white rounded-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              className="w-full mt-2 p-2 bg-gray-800 text-white rounded-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-2 p-2 bg-gray-800 text-white rounded-lg"
              required
              rows={4}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
          >
            Send Message
          </button>
        </form>

        {status && (
          <div
            className={`mt-4 p-4 rounded-lg ${status.includes("error") ? "bg-red-400" : "bg-green-900"
              } text-white`}
          >
            {status}
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;

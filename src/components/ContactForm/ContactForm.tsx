"use client";
import { useState } from "react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setIsLoading(true); // Start loading when the form is submitted

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "9ef7d100-5242-4cd7-a746-fcefb543cd80",
        subject : `${e.target.name.value} sent a message from Moe131.github.io`,
        from_name : "Moe131.github.io",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    setIsLoading(false); // Stop loading after the response is received

    if (result.success) {
      setIsSubmitted(true); // Set state to true when form submission is successful
      e.target.reset(); // Reset the form fields after submission
    }
  }

  return (
    <div className="m-auto bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8 my-9 max-w-3xl">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-5 text-center"> Contact Form </h2>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col space-y-6 w-full mt-10"
      >
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="mb-2 font-medium text-gray-800 dark:text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-2 font-medium text-gray-800 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="email@example.com"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="mb-2 font-medium text-gray-800 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            name="message"
            required
            placeholder="Enter Message"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white h-32"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isLoading} // Disable the button when loading
          className={`px-6 py-2 text-white bg-sky-600 dark:bg-cyan-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-sky-700 dark:hover:bg-sky-700 "
          }`}
        >
          {isLoading ? "Submitting..." : "Submit Form"}
        </button>
      </form>

      {/* Success message */}
      {isSubmitted && (
        <div className="mt-6 text-center text-green-600 dark:text-green-400">
          Thank you! Your message has been successfully sent. We'll get back to you shortly.
        </div>
      )}
    </div>
  );
}
"use client"
import { useState } from 'react';
import LightMailIcon from "../../assets/email-light.png"
import DarkMailIcon from "../../assets/email-dark.png"
import Image from 'next/image';
import { useTheme } from 'next-themes';


export default function Contact() {
    const {theme , setTheme} = useTheme()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, such as sending the data to a server
        console.log(formData);
        alert('Form submitted successfully!');
    };

    return (
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-8">Contact Me</h1>
            <div className="max-w-screen-md mx-auto text-center mb-5">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Interested in working together?
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        Feel free to reach out to me via email or fill out the form below.
                    </p>
                    <div className="flex justify-center items-center space-x-3">
                        <Image src={DarkMailIcon} alt="Email Icon" className="hidden w-8 h-8 text-gray-900 dark:text-white dark:block" />
                        <Image src={LightMailIcon} alt="Email Icon" className=" w-8 h-8 text-gray-900 dark:text-white dark:hidden" />
                        <a href="mailto:mirzaem1@uci.edu" className="text-lg text-sky-600 dark:text-cyan-400">
                                mirzaem1@uci.edu
                        </a>
                    </div>
                </div>
            <div className="max-w-screen-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 my-9 ">                

                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-5 text-center"> Contact Form </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-3 bg-gray-50	text-black border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 focus:ring-sky-600 focus:border-sky-600"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-3 bg-gray-50	text-black border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 focus:ring-sky-600 focus:border-sky-600"
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-3 bg-gray-50	text-black border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 focus:ring-sky-600 focus:border-sky-600"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-3 bg-gray-50	text-black border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 focus:ring-sky-600 focus:border-sky-600"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-6 bg-sky-600 text-white rounded-lg shadow-md hover:bg-sky-700 dark:bg-cyan-600 dark:hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

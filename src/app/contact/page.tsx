import LightMailIcon from "../../assets/email-light.png"
import DarkMailIcon from "../../assets/email-dark.png"
import Image from 'next/image';
import ContactForm from '@/components/ContactForm/ContactForm';


export default function Contact() {

    return (
        <section className=" min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-8 lg:text-4xl">Contact Me</h1>
            <div className="max-w-screen-md mx-auto text-center mb-5">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 lg:text-2xl">
                        Interested in working together?
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 lg:text-xl">
                        Feel free to reach out to me via email or fill out the form below.
                    </p>
                    <div className="flex justify-center items-center space-x-3">
                        <Image src={DarkMailIcon} alt="Email Icon" className="hidden w-8 h-8 text-gray-900 dark:text-white dark:block" />
                        <Image src={LightMailIcon} alt="Email Icon" className=" w-8 h-8 text-gray-900 dark:text-white dark:hidden" />
                        <a href="mailto:mirzaem1@uci.edu" className="text-xl font-bold text-sky-600 dark:text-cyan-400 lg:text-2xl">
                                mirzaem1@uci.edu
                        </a>
                    </div>
                </div>
            <ContactForm />
        </section>
    );
}
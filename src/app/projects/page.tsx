import React from "react";
import styles from "./ProjectsStyles.module.css"
import searchEngineLogo from "../../assets/search-engine.png"
import hotelReservationLogo from "../../assets/hotel.png"
import crawlerLogo from "../../assets/crawler.jpg"
import foodDeliveryLogo from "../../assets/food-delivery.png"
import cryptofolioLogo from "../../assets/cryptofolio-logo.png"
import playlistDownloaderLogo from "../../assets/playlistDownloader-logo.png"
import ProjectCard from "@/components/ProjectCard/page"
import chatAppLogo from "../../assets/liveChatApp.png"
import speechRefinerImage from "../../assets/speechRefiner.png"
import snakeGameImage from "../../assets/snake.png"
import fabflix from "../../assets/fabflix.png"



export default function Projects(){
    return (
        <section id="projects" className="bg-gray-100 dark:bg-gray-900 py-12">
            <h1 className="text-center text-3xl sm:text-4xl font-bold text-left text-gray-900 dark:text-white mb-10">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto px-5">

            <ProjectCard
            image={foodDeliveryLogo} 
            title="Food Delivery Full Stack Mobile App"
            technologies= {["React Native", "Firebase", "Javascript", "Google Places", "Yelp API"]}
            githubLink= "https://github.com/Moe131/food-delivery-app"
            demoLink= "https://youtube.com/shorts/ZQD9tCYyF9c?feature=shared"
            description = "A React Native full stack application designed to help users to sign up, find nearby restaurants and place food delivery or pick-up orders."
            />

            <ProjectCard
            image={fabflix} 
            title="FabFlix Application"
            technologies= {["Java", "Javascript","MySQL", "AWS EC2", "Tomcat", "Maven","HTML/CSS", "Javascript", "Kubernetes"]}
            githubLink= "https://youtu.be/kpHTsJJ4Umo?feature=shared"
            demoLink= "https://youtu.be/kpHTsJJ4Umo?feature=shared"
            description = "A comprehensive movie purchasing web app with a responsive UI, Java API, and MySQL databae, deployed on AWS EC2 with Kubernetes"
            />


            <ProjectCard 
            image={cryptofolioLogo} 
            title="CryptoFolio Web Application"
            technologies= {["React", "AWS Amplify", "Javascript" , "DynamoDB", "REST API"]}
            githubLink= "https://github.com/Moe131/cryptofolio"
            demoLink= "https://main.d2pujeh9fcxm5.amplifyapp.com/"
            description = "A ReactJS full-stack web application that allows users to sign up, track the current prices of various cryptocurrencies, and create and edit custom watchlists."
            />

            <ProjectCard
            image={chatAppLogo} 
            title="Next.js Real-time Chat Application"
            technologies={["Next.js", "TypeScript", "NextAuth","Redis", "Pusher", "WebSocket", "TailwindCSS"]}
            githubLink="https://github.com/Moe131/realtime_chat_app"  
            demoLink="https://youtu.be/MrMaQgtBnpE?si=oYHOOoufxOskiMuv"  
            description="A real-time chat application built with Next.js and TypeScript. Users can log in using Google authentication, add friends and chat with them in real-time"
            />

            <ProjectCard 
            image={searchEngineLogo} 
            title="Search Engine Web Application"
            technologies= {["Python", "Flask", "OpenAI API"]}
            githubLink= "https://github.com/Moe131/Search_engine_web_app"
            demoLink= "https://github.com/Moe131/Search_engine_web_app"
            description = "Search engine web application developed with Python and Flask that allows searching over hundreds of thousand of websites."
            />
            
            <ProjectCard 
            image={hotelReservationLogo} 
            title="Hotel Reservation System"
            technologies= {["Python", "Tkinter", "SQLite"]}
            githubLink= "https://github.com/Moe131/Hotel_Reservation_System"
            demoLink= "https://github.com/Moe131/Hotel_Reservation_System"
            description = "Simple hotel reservation system built with Python and Tkinter to store, manage and delete bookings using SQLite database."
            />

            <ProjectCard 
            image={crawlerLogo} 
            title="Web Crawler"
            technologies= {["Python", "BeautifulSoup", "Git", "Simhash"]}
            githubLink ="https://github.com/Moe131/webcrawler"
            demoLink= "https://github.com/Moe131/webcrawler"
            description = "A Python-based web crawler designed to efficiently scrape, parse, and store data from websites avoiding loops and duplicate websites "
            />   

            <ProjectCard 
            image={playlistDownloaderLogo} 
            title="Spotify Playlist Song Downloader"
            technologies= {["Python", "Selenium", "PyTube", "REST API"]}
            githubLink= "https://github.com/Moe131/playlist-downloader"
            demoLink= "https://github.com/Moe131/playlist-downloader"
            description = "This application allows you to download songs from a Spotify playlist by searching and downloading them from YouTube using Selenium and Pytube library."
            />   

            <ProjectCard 
            image={speechRefinerImage} 
            title="Speech Refiner Application"
            technologies={["Python", "GPT-4", "Flask", "HTML", "CSS"]}
            githubLink="https://github.com/Moe131/speech-refiner"
            demoLink="https://github.com/Moe131/speech-refiner"
            description="A Flask application to help improve your English speaking skills. It allows you to record your speech, and then refines it using GPT-4 to provide suggestions for improvement."
            />

            <ProjectCard 
            image={snakeGameImage} 
            title="Snake Game"
            technologies={["C++", "ncurses"]}
            githubLink="https://github.com/Moe131/snake-game"
            demoLink="https://youtu.be/O3j6S6F8gO0"
            description="A terminal-based Snake game built using C++ and ncurses. The game features smooth gameplay with dynamic screen rendering, boundary detection, and real-time snake movement."
            />

        </div>
    </section>
    )
}
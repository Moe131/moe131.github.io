import React from "react";
import styles from "./ProjectsStyles.module.css"
import searchEngineLogo from "../../assets/search-engine.png"
import hotelReservationLogo from "../../assets/hotel.png"
import crawlerLogo from "../../assets/crawler.jpg"
import foodDeliveryLogo from "../../assets/food-delivery.png"
import cryptofolioLogo from "../../assets/cryptofolio-logo.png"
import playlistDownloaderLogo from "../../assets/playlistDownloader-logo.png"
import ProjectCard from "@/components/ProjectCard/page";



export default function Projects(){
    return (
        <section id="projects" className="bg-gray-100 dark:bg-gray-900 py-12">
            <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto px-5">

            <ProjectCard
            image={foodDeliveryLogo} 
            title="Food Delivery Full Stack Mobile App"
            technologies= {["React Native", "Firebase", "Javascript"]}
            githubLink= "/"
            demoLink= "/"
            description = "A React Native full stack application designed to help users to sign up, find nearby restaurants and place food delivery or pick-up orders."
            />

            <ProjectCard 
            image={cryptofolioLogo} 
            title="CryptoFolio Web Application"
            technologies= {["ReactJS", "AWS Amplify", "Javascript"]}
            githubLink= "/"
            demoLink= "/"
            description = "A ReactJS full-stack web application that allows users to sign up, track the current prices of various cryptocurrencies, and create and edit custom watchlists."
            />

            <ProjectCard 
            image={searchEngineLogo} 
            title="Search Engine Web Application"
            technologies= {["python"]}
            githubLink= "/"
            demoLink= "/"
            description = "Search engine web application developed with Python and Flask that allows searching over hundreds of thousand of websites."
            />
            
            <ProjectCard 
            image={hotelReservationLogo} 
            title="Hotel Reservation System"
            technologies= {["python"]}
            githubLink= "/"
            demoLink= "/"
            description = "Simple hotel reservation system built with Python and Tkinter to store, manage and delete bookings using SQLite database."
            />

            <ProjectCard 
            image={crawlerLogo} 
            title="Web Crawler"
            technologies= {["python"]}
            githubLink ="/"
            demoLink= "/"
            description = "A Python-based web crawler designed to efficiently scrape, parse, and store data from websites avoiding loops and duplicate websites "
            />   

            <ProjectCard 
            image={playlistDownloaderLogo} 
            title="Spotify Playlist Song Downloader"
            technologies= {["python"]}
            githubLink= "/"
            demoLink= "/"
            description = "This application allows you to download songs from a Spotify playlist by searching and downloading them from YouTube using Selenium and Pytube library."
            />   
        </div>
    </section>
    )
}
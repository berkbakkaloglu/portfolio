import React from "react"
import Avatar from "../public/images/berk.jpg"
import Services from "./Services"
import About from "./About"
import Projects from "./Projects/Projects"
export default function Home(){
    return (
        <>
            <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Berk Bakkaloğlu</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">Front-End Developer</p>
            <img src={Avatar} alt="a picture of Berk" className="intro__img" />
            </section>
            <Services/>
            <About/>
            <Projects/>
            
        </>
    )
}
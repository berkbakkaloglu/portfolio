import React from "react"
import Avatar from "../public/images/berkoncar.png"

export default function About(){
    return (
        <section className="about-me" id="about">
           <h2 className="section__title section__title--about">Who am I?</h2>
           <p className="section__subtitle section__subtitle--about">Front-End Developer from İzmir</p>
           
           <div className="about-me__body">
               <p>I am a frontend developer based in Izmir, passionate about creating web applications that simplify people's lives. I enjoy collaborating in team environments and believe that strong teamwork is key to delivering impactful solutions.</p>
               <p>In addition to my technical skills in web development, I have a unique background in the cryptocurrency sector, where I focused on anti-fraud and anti-money laundering efforts. Prior to that, I organized sports events, which has helped me develop strong organizational and communication skills.I am driven by the idea of using technology to make a positive impact and am eager to contribute to projects that improve everyday experiences for users.</p>
           </div>
           
           <img src={Avatar} alt="Berk working on bike organization" className="about-me__img" />
        </section>

    )
}


import React from "react"
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom"



export default function Footer(){
    return(
        <footer className="footer">
            
            <a href="mailto:hello@jane.dev" className="footer__link">berkbakkaloglu@gmail.com</a>
            <ul className="social-list">
                
                <li className="social-list__item">
                <Link className="social-list__link" target="_blank" to="https://www.linkedin.com/in/berk-bakkaloglu-4898a0309/"> <FaLinkedinIn /></Link>
                </li>
                <li className="social-list__item">
                    <Link className="social-list__link" target="_blank" to="https://github.com/berkbakkaloglu"> < FaGithub /></Link>
                </li>
            </ul>
        </footer>
    )
}
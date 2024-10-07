import React from "react"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"


export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

      return (
        <header>
            <Link className="site-logo" to="/">/Dev Berk</Link>
            <nav>
                <HashLink
                    to="/#services"
                >
                    Services
                </HashLink>
                <HashLink
                    to="/#about"
                >
                    About
                </HashLink>
                <HashLink
                    to="/#work"
                >
                    Projects
                </HashLink>
                
                
            </nav>
        </header>
    )
}
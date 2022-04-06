import React from "react";
import './css/header.css'
import logo from '../assets/logo 1.png'

export const header = () => {
    return (
    <>
        <header id="navFlex">
        <a href="/">
            <img src={logo} alt="logoBolo" id="logo" />
        </a>
        <nav id="left">
            <div>
                <ul id="navList">
                    <li className="navItems"><a href="/" className="texts">Home</a></li>
                    <li className="navItems"><a href="/about" className="texts">Sobre</a></li>
                    <li className="navItems"><a href="bolos" className="texts">Bolos</a></li>
                </ul>
            </div>
        </nav>
    </header>
    </>
    )
}

export default header;


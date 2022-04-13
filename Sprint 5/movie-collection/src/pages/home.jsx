import React from "react";
import './css/maintenance.css';
import logo from '../assets/logoColored.png'

function Home() {
    return (
        <div>
            <head>
            <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet" />
            </head>
            <div className="main">
            <div class="box">
                <img src={logo} id="logo"/>
                <div id="title">
                SITE EM MANUTENÇÃO
                </div>
                <div id="descricao">
                (21) 998656604<br />
                tdroid@brq.com
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home;
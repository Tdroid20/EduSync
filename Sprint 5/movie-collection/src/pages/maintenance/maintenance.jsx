/* 
<div>
            <head>
            <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet" />
            </head>
            <div ClassNameName="main">
            <div ClassName="box">
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
*/
import React from "react";
import './maintenance.css';
import logo from '../../assets/logoColored.png'

function Off() {
    return(
        <div>
            <head>
            <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet" />
            </head>
            <div ClassName="main">
            <div ClassName="box">
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

export default Off;
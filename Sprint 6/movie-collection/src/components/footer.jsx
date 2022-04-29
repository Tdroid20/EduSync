import React from "react";
import logoFooter from '../assets/Footer logo.png'
import './css/footer.css';

function Footer() {
    return (
        <>
        <footer className="rodape">
            <img src={logoFooter} alt="Logo Movies collections" className="fundo" />
            <div className="linha"></div>
            <div className="pFooter">
                <br />
                <p id="p1" className="SoloRoboto"> Company Inc, 8901 Marmora Road, Glasspow, DO4 89GR</p>
                <br />
                <p id="p2" className="SoloRoboto"> Call us now toll free: (800)2345-6789</p>
                <br />
                <p id="p3" className="SoloRoboto"> Costumer support suporrt@demolink.org</p>
                <br />
                <p id="p4" className="SoloRoboto"> Skype: Sample-username</p>
                <br />
            </div>
        </footer>
        </>
    )
}

export default Footer;
import React from "react";
import logoFooter from '../assets/Footer logo.png'
import './css/footer.css';

function Footer() {
    return (
        <>
        <footer class="rodape">
            <img src={logoFooter} alt="Logo Movies collections" class="fundo" />
            <div class="linha"></div>
            <div class="pFooter">
                <br />
                <p id="p1" class="SoloRoboto"> Company Inc, 8901 Marmora Road, Glasspow, DO4 89GR</p>
                <br />
                <p id="p2" class="SoloRoboto"> Call us now toll free: (800)2345-6789</p>
                <br />
                <p id="p3" class="SoloRoboto"> Costumer support suporrt@demolink.org</p>
                <br />
                <p id="p4" class="SoloRoboto"> Skype: Sample-username</p>
                <br />
            </div>
        </footer>
        </>
    )
}

export default Footer;
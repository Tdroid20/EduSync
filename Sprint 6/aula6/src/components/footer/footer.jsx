import React from "react";
import './footer.css';
import zap from '../../assets/icons/Whats 66x68 4.png'
import face from "../../assets/icons/Redes Face 66x68 4.png"
import insta from "../../assets/icons/Inst 66x68 4.png" 
import twt from "../../assets/icons/Redes Twiter 66x68.png 3.png"

const Footer = () => {
    return (
        <div>
             <footer>
                <div className="center">
                    <p id="copyraite">&copy; Todos os direitos reservados</p>
                    <div className="network">
                        <img src={zap} alt="zap zap" className="icons" />
                        <img src={insta} alt="insta" className="icons" />
                        <img src={face} alt="facebook" className="icons" />
                        <img src={twt} alt="rede da treta" className="icons" />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
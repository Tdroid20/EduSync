import React from "react";
import './header.css'

const Header = () => {
    return (
        <div>
            <header>
            <nav className="nav">
                <ul>
                    <li className="listNav"><a href="/" className="TextNav">PointTour</a></li>
                    <li className="listNav"><a href="/" className="TextNav">Roteiro</a></li>
                </ul>
            </nav>
        </header>
        </div>
    )
}

export default Header;
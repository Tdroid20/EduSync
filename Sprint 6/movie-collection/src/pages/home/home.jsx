import React from "react";
import './home.css';
import logo from '../../assets/HeaderLogo.png'
import cine from '../../assets/cinema 1.png';
import mask from '../../assets/theater 1.png';
import Footer from "../../components/footer";


function Home() {
    return (
        <div>
            {/* Header */} 
            <header>
            <nav>
                <div id="logo">
                    <div className="ConteinerLogo">
                        <img src={logo} alt="Logo" id="logoPng" />
                        <div className="webName">
                            <h2 className="slogan">Conheça nossa Coletânea</h2>
                        </div>
                    </div>
                </div>
                <div className="nav">
                    <ul>
                        <li className="navList"><a href="/" className="navText">Home</a></li>
                        <li className="navList"><a href="/users" className="navText">Usuários</a></li>
                        <li className="navList"><a href="/movies" className="navText">Filmes</a></li>
                        <li className="navList" ><a href="/gender" className="navText">Gênero</a></li>
                    </ul>
                </div>
            </nav>
            </header>

            {/*  main  */}
            <div className="main">
                <div id="center">
                    <h1 id="title">Monte sua coletânea de filmes...</h1>
                </div>
                <div className="text">
                    <p className="t1">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor</p>
                    <p className="t2">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit. </p>
                </div>

                <div className="cards">
                    <div className="card">
                        <img src={cine} alt="cinema" />
                        <p className="t3">Filmes</p>
                        <p className="t4">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="card">
                        <img src={mask} alt="cinema" />
                        <p className="t3">Categorias</p>
                        <p className="t4">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
            {/* Footer */} 
            <Footer />
        </div>
    )
}

export default Home;
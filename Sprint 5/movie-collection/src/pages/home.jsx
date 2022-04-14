import React from "react";
import './css/home.css';
import logo from '../assets/logoColored.png';
import cine from '../assets/cinema 1.png';
import mask from '../assets/theater 1.png';
import Footer from "../components/footer";


function Home() {
    return (
        <div>
            {/* Header */} 
            <header>
                <nav>
                    <div id="logo">
                        <div>
                            <img src={logo} alt="Logo" />
                        </div>
                        <div class="webName">
                            <h1 id="HTitle1">Filmes</h1>
                            <p id="HTitle2">collections</p>
                        </div>
                    </div>
                    <div class="nav">
                        <ul>
                            <li class="navList"><a href="/" class="navText">Home</a></li>
                            <li class="navList"><a href="/users" class="navText">Usuario</a></li>
                            <li class="navList"><a href="/movies" class="navText">Filmes</a></li>
                            <li class="navList" ><a href="/gender" class="navText">Gênero</a></li>
                        </ul>
                    </div>
                </nav>
                <h2 class="slogan">Conheça nossa Coletânea</h2>
            </header>

            {/*  main  */}
            <div class="main">
                <div id="center">
                    <h1 id="title">Monte sua coletânea de filmes...</h1>
                </div>
                <div class="text">
                    <p class="t1">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor</p>
                    <p class="t2">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit. </p>
                </div>

                <div class="cards">
                    <div class="card">
                        <img src={cine} alt="cinema" />
                        <p class="t3">Filmes</p>
                        <p class="t4">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore aliquip ex ea commodo consequat.</p>
                    </div>
                    <div class="card">
                        <img src={mask} alt="cinema" />
                        <p class="t3">Categorias</p>
                        <p class="t4">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
            {/* Footer */} 
            <Footer />
        </div>
    )
}

export default Home;
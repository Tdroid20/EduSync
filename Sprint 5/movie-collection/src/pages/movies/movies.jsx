import React, { useEffect, useState } from "react";
import logo from '../../assets/logoColored.png';
import Footer from "../../components/footer";
import cine from '../../assets/cinema 1.png';
import './movies.css';
import { getApi } from "../../api";
import { MoviesComponent } from "../../components/moviesComponent";


function MoviesPage() {

    const [movies, setMovies] = useState([]);

    const ListMovies = () => {
        getApi.get('Movies').then(res => {
            setMovies(res.data)
        });

    }
    useEffect(() => {
        ListMovies()
    }, [])

    return (
        <div>

        {/* Header */} 
        <header>
            <nav>
                <div id="logo">
                    <a href="/" className="backToHome">
                    <div>
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="webName">
                        <h1 id="HTitle1">Filmes</h1>
                        <p id="HTitle2">collections</p>
                    </div>
                    </a>
                </div>
                <div className="nav">
                    <ul>
                        <li className="navList"><a href="/" className="navText">Home</a></li>
                        <li className="navList"><a href="/users" className="navText">Usuario</a></li>
                        <li className="navList"><a href="/movies" className="navText">Filmes</a></li>
                        <li className="navList" ><a href="/gender" className="navText">Gênero</a></li>
                    </ul>
                </div>
            </nav>
            <h2 className="slogan">Cadastre os filmes de sua preferência</h2>
        </header>

        {/* main */} 
        
        <div className="main">
            <p className="title">Filmes</p>
            <div className="center">
                <img src={cine} alt="icone Filmes" id="img" />
            </div>
            <div className="contentMV">
                <p className="labelMV">Cadastrar Filmes</p>
                <div className="inputsMV">
                    <input type="text" placeholder="Titulo do filme" className="inputMV" />
                    <select name="gender" id="gender" className="inputMV">
                        <option value="none">Gênero</option>
                        <option value="comedia">Comédia</option>
                        <option value="terrror">Terror</option>
                        <option value="suspense">Suspense</option>
                        <option value="fml">Para Toda Familía</option>
                    </select>
                    <button id="saveMV">Salvar</button>
                </div>
                
                { movies.map(x => <MoviesComponent obj={x} key={x.id} />) }

                </div>
            </div>

        {/* Footer */} 
        <Footer />
        </div>
    )
}

export default MoviesPage;
import React, { useEffect, useState } from "react";
import logo from '../../assets/logoColored.png';
import Footer from "../../components/footer";
import cine from '../../assets/cinema 1.png';
import './movies.css';
import { endpointApi, getApi } from "../../api";
import { MoviesComponent } from "../../components/moviesComponent";
import axios from "axios";

export class Movies {
    list(setMovies) {
            getApi.get('Movies').then(res => {
                setMovies(res.data)
    });
  }
}
export class GenderList {
    list(setGender) {
            getApi.get('Gender').then(res => {
                setGender(res.data)
    });
  }
}

function MoviesPage() {

    const [movies, setMovies] = useState([]);
    const [gender, setGender] = useState([]);

    useEffect(() => {
        new Movies().list(setMovies);
        new GenderList().list(setGender);
    }, [])
    
    const $register = () => {
        
        let titleMovie = document.getElementById('titleInput');
        let genderSelect = document.getElementById('gender');
        
        
        let data = {
            name: titleMovie.value,
            gender: genderSelect.value,
            id: movies.map(x => x).length + 1
        }
        
        console.log(data)
        axios.post(endpointApi + 'Movies', data) 

    }

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
                    <input type="text" placeholder="Titulo do filme" className="inputMV" id="titleInput"/>
                    <select name="gender" id="gender" className="inputMV">
                        { gender.map(x => <option key={x.id}>{x.name}</option>) }
                    </select>
                    <button id="saveMV" onClick={() => $register()}>Salvar</button>
                </div>
            
                { movies.map((x, y) => <MoviesComponent obj={x} sobj={y} setMoviesState={setMovies} gender={gender} key={x.id} />) }

                </div>
            </div>

        {/* Footer */} 
        <Footer />
        </div>
    )
}

export default MoviesPage;
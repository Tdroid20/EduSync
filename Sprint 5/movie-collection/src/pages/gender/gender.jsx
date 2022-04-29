import React, { useEffect, useState } from "react";
import logo from '../../assets/logoColored.png';
import Footer from "../../components/footer";
import mask from '../../assets/theater 1.png';
import './gender.css'
import { GenderComponent } from "../../components/genderComponent";
import { endpointApi, getApi } from "../../api";
import { GenderList } from "../movies/movies";
import axios from "axios";

function Gender() {

    const [gender, setGender] = useState([])

    useEffect(() => {
        new GenderList().list(setGender);
    }, [])
    
    const $register = () => {
        
        let titleMovie = document.getElementById('titleInput');
        let genderSelect = document.getElementById('gender');
        
        
        let data = {
            name: titleMovie.value,
            gender: genderSelect.value,
            id: gender.map(x => x).length + 1
        }
        
        console.log(data)
        axios.post(endpointApi + 'Movies', data) 

    }

    return (
        <>
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
            <h2 className="slogan">Cadastre os gêneros dos filmes</h2>
        </header>

        {/* main */}
        
        <div className="main">
            <p className="title">Gêneros</p>
            <div className="center">
                <img src={mask} alt="icone Filmes" id="img" />
            </div>
            <div className="contentGD">
                <p className="labelGD">Cadastrar Gênero</p>
                <div className="inputsGD">
                    <input type="text" placeholder="Gênero" className="inputGD" />
                    <button id="saveGD" onClick={() => $register()}>Salvar</button>
                </div>

                { gender.map((x, y) => <GenderComponent obj={x} gender={x} sobj={y} setGenderState={setGender} key={x.id} />) }

                </div>
            </div>

        {/* Footer */} 
        <Footer />
        </>
    )
}

export default Gender;
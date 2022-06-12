import React, { useEffect, useState } from "react";
import logo from '../../assets/HeaderLogo.png';
import Footer from "../../components/footer";
import cine from '../../assets/cinema 1.png';
import './movies.css';
import { endpointApi, getApi } from "../../api";
import { MoviesComponent } from "../../components/moviesComponent";
import axios from "axios";
import { BlockNullInput } from "../../components/security/BlockNullInput";
import { LoadingComponent } from "../../components/Loading";

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

export class UserApi {
    list(setUser) {
            getApi.get('Users').then(res => {
                setUser(res.data)
    });
  }
}

function MoviesPage() {

    const [movies, setMovies] = useState([]);
    const [gender, setGender] = useState([]);

    const [StatusErro, setStatus] = useState('ok');
    const [NameUserErro, setNameUserErro] = useState(undefined);
    const [field, setField] = useState('');

    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            getApi.get('Movies').then(res => {
                setMovies(res.data)
            }).then(() => {
                getApi.get('Gender').then(res => {
                    setGender(res.data)
                    setLoading(false)
                });
            });
        }, 1000)
    }, [])
    
    

    const $register = () => {
        
        let titleMovie = document.getElementById('titleInput');
        let genderSelect = document.getElementById('gender');

        let data = {
            name: titleMovie.value,
            gender: genderSelect.value,
            id: movies.map(x => x).length + 1
        }

        if(titleMovie.value === '') {
            setStatus('Erro')
            return setField('Titulo do filme')
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
                    <div className="ConteinerLogo">
                        <img src={logo} alt="Logo" id="logoPng" />
                        <div className="webName">
                        <h2 className="slogan">Cadastre os filmes de sua preferência</h2>
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
                        <option value={null} selected>Gênero</option>
                        { gender.map(x => <option key={x.id}>{x.name}</option>) }
                    </select>
                    <button id="saveMV" onClick={() => $register()}>Salvar</button>
                </div>
            
                
                { Loading && <LoadingComponent /> }

                { movies.map((x, y) => <MoviesComponent obj={x} sobj={y} setMoviesState={setMovies} gender={gender} key={x.id} />) }

                <BlockNullInput Status={StatusErro} setStatus={setStatus} field={field} UserName={NameUserErro}/>

                </div>
            </div>

        {/* Footer */} 
        <Footer />
        </div>
    )
}

export default MoviesPage;
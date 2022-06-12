import React, { useEffect, useState } from "react";
import logo from '../../assets/HeaderLogo.png'
import Footer from "../../components/footer";
import mask from '../../assets/theater 1.png';
import './gender.css'
import { GenderComponent } from "../../components/genderComponent";
import { endpointApi, getApi } from "../../api";
import { GenderList } from "../movies/movies";
import axios from "axios";
import { BlockNullInput } from "../../components/security/BlockNullInput";
import { LoadingComponent } from "../../components/Loading";

function Gender() {

    const [gender, setGender] = useState([]);

    const [StatusErro, setStatus] = useState('ok');
    const [NameUserErro, setNameUserErro] = useState(undefined);
    const [field, setField] = useState('');
    const [Loading, setLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            getApi.get('Gender').then(res => {
                setGender(res.data)
                setLoading(false)
            });
        }, 1000)
    }, [])
    
    const $register = () => {
        
        let titleGender = document.getElementById('InputGender');
        
        if(titleGender.value === '') {
            setStatus('Erro')
            return setField('Gênero')
        } 
        
        let data = {
            name: titleGender.value,
            id: gender.map(x => x).length + 1
        }
        
        axios.post(endpointApi + 'Gender', data).then(res => {
            new GenderList().list(setGender)
        })
    }

    return (
        <>
        {/* Header */} 
        <header>
            <nav>
                <div id="logo">
                    <div className="ConteinerLogo">
                        <img src={logo} alt="Logo" id="logoPng" />
                        <div className="webName">
                        <h2 className="slogan">Cadastre os gêneros dos filmes</h2>
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
            <p className="title">Gêneros</p>
            <div className="center">
                <img src={mask} alt="icone Filmes" id="img" />
            </div>
            <div className="contentGD">
                <p className="labelGD">Cadastrar Gênero</p>
                <div className="inputsGD">
                    <input type="text" placeholder="Gênero" className="inputGD"  id="InputGender"/>
                    <button id="saveGD" onClick={() => $register()}>Salvar</button>
                </div>

                { Loading && <LoadingComponent /> }

                <BlockNullInput Status={StatusErro} setStatus={setStatus} field={field} UserName={NameUserErro}/>
                { gender.map((x, y) => <GenderComponent obj={x} gender={x} sobj={y} setGenderState={setGender} key={x.id} />) }

                </div>
            </div>

        {/* Footer */} 
        <Footer />
        </>
    )
}

export default Gender;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { endpointApi, getApi } from "../../api/index";
import logo from '../../assets/HeaderLogo.png';
import Footer from "../../components/footer";
import { LoadingComponent } from "../../components/Loading";
import { BlockNullInput } from "../../components/security/BlockNullInput";
import { UserComponents } from "../../components/users";
import { UserApi } from "../movies/movies";
import './user.css';

function UserPage() {

    const [user, setUser] = useState([]);
    const [Mode, setMode] = useState('off');

    const [StatusErro, setStatus] = useState('ok');
    const [NameUserErro, setNameUserErro] = useState(undefined);
    const [field, setField] = useState('');
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            getApi.get('Users').then(res => {
                setUser(res.data)
                setLoading(false)
            });
        }, 1000)
    }, [])
    
    const $register = () => {
        
        let UserName = document.getElementById('Name');
        let UserEmail = document.getElementById('Email');
        let UserPhone = document.getElementById('Phone');
        
        console.log(UserName.value)
        
        let data = {
            user: UserName.value,
            email: UserEmail.value,
            phone: UserPhone.value,
            id: user.map(x => x).length + 1
        }
        
        if(UserName.value === '') {
            setStatus('Erro')
            return setField('Nome')
        } else if(UserEmail.value === '') {
            setStatus('Erro')
            setField('Email')
            return setNameUserErro(UserName.value)
        } else if(UserPhone.value === '') {
            setStatus('Erro')
            setField('Telefone')
            return setNameUserErro(UserName.value)
        }

        axios.post(endpointApi + 'Users', data).then(res => {
            UserName.value = ''
            UserEmail.value = ''
            UserPhone.value = ''
            new UserApi().list(setUser)
        })

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
                            <h2 className="slogan">Faça o Cadastro de usuários e  edite, caso necessário <br /> Pronto para cadastrar?</h2>
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
                <div id="center">
                    <h1 id="Usertitle">Cadastro</h1>
                </div>
        
                <div className="inputs">
                    <div className="input">
                        <p className="labelInput">Nome</p>
                        <input type="text" placeholder="Digite o Nome" className="inputTxt" id="Name" />
                        <div id="btn">
                            <button id="btnSignin" onClick={() => $register()}>Cadastrar</button>
                        </div>
                    </div>
                    <div className="input">
                        <p className="labelInput">E-mail</p>
                        <input type="text" placeholder="Digite o E-mail" className="inputTxt" id="Email"/>
                    </div>
                    <div className="input">
                        <p className="labelInput">Telefone</p>
                        <input type="text" placeholder="Digite o Telefone" className="inputTxt" id="Phone" />
                    </div>
                </div>


            { Loading && <LoadingComponent />}

            { user.map((x, y) => 
            <UserComponents 
            obj={x} 
            sobj={y} 
            setUser={setUser}
            setMode={setMode}
            Mode={Mode}
            key={x.id} 
            /> ) }
            </div>

            <BlockNullInput Status={StatusErro} setStatus={setStatus} field={field} UserName={NameUserErro}/>

            {/* Footer */}
            <Footer />
            <script src="./userSave.js"></script>
         </div>
    )
}

export default UserPage;
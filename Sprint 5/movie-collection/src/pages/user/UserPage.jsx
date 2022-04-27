import React, { useEffect, useState } from "react";
import { getApi } from "../../api/index";
import logo from '../../assets/logoColored.png'
import Footer from "../../components/footer";
import { UserComponents } from "../../components/users";
import './user.css'

function UserPage() {

    const [user, setUser] = useState([]);

    const ListUsers = () => {
        getApi.get('Users').then(res => {
            setUser(res.data)
        });

    }
    useEffect(() => {
        ListUsers()
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
                <h2 className="slogan">Faça o Cadastro de usuários e  edite, caso necessário <br /> Pronto para cadastrar?</h2>
            </header>
        
            {/* main */}
            
            <div className="main">
                <div id="center">
                    <h1 id="Usertitle">Cadastro</h1>
                </div>
        
                <div className="inputs">
                    <div className="input">
                        <p className="labelInput">Nome</p>
                        <input type="text" placeholder="Digite o Nome" className="inputTxt" />
                        <div id="btn">
                            <button id="btnSignin">Cadastrar</button>
                        </div>
                    </div>
                    <div className="input">
                        <p className="labelInput">Email</p>
                        <input type="text" placeholder="Digite o Email" className="inputTxt" />
                    </div>
                    <div className="input">
                        <p className="labelInput">Telefone</p>
                        <input type="text" placeholder="Digite o Telefone" className="inputTxt" />
                    </div>
                </div>
            { user.map(x => <UserComponents obj={x} key={x.id} /> ) }
            </div>


            {/* Footer */}
            <Footer />
            <script src="./userSave.js"></script>
         </div>
    )
}

export default UserPage;
import React from "react";
import logo from '../../assets/logoColored.png'
import Footer from "../../components/footer";
import './user.css'

function UserPage() {
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
        
                <div className="contentUser">
                <div className="userList">
                    <li className="listFlex">
                        <p className="name">Paulo Andre</p>
                        <div className="random">
                            <p className="email">paulo@email.com</p>
                            <p className="tell">3349 6788</p>
                        </div>
            
                        <div className="listBtn">
                            <button className="edit">Editar</button>
                            <button className="delete">Excluir</button>
                        </div>
                    </li>
                    <li className="listFlex">
                        <p className="name">Marcos Lucio</p>
                        <div className="random">
                            <p className="email">marcos@email.com</p>
                            <p className="tell">3349 6788</p>
                        </div>
            
                        <div className="listBtn">
                            <button className="edit">Editar</button>
                            <button className="delete">Excluir</button>
                        </div>
                    </li>
                    <li className="listFlex" id="end">
                        <p className="name">Laura Port</p>
                        <div className="random">
                            <p className="email">laura@email.com</p>
                            <p className="tell">3349 6788</p>
                        </div>
            
                        <div className="listBtn">
                            <button className="edit">Editar</button>
                            <button className="delete">Excluir</button>
                        </div>
                    </li>
                </div>
                </div>
            </div>
        
            {/* Footer */}
            <Footer />
         </div>
    )
}

export default UserPage;
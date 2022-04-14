import React from "react";
import './css/user.css';
import logo from '../assets/logoColored.png'
import Footer from "../components/footer";

function UserPage() {
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
                        <li class="navList" ><a href="/" class="navText">Gênero</a></li>
                    </ul>
                </div>
            </nav>
            <h2 class="slogan">Faça o Cadastro de usuários e  edite, caso necessário <br /> Pronto para cadastrar?</h2>
        </header>
    
         {/* main */}
        
        <div class="main">
            <div id="center">
                <h1 id="Usertitle">Cadastro</h1>
            </div>
    
            <div class="inputs">
                <div class="input">
                    <p class="labelInput">Nome</p>
                    <input type="text" placeholder="Digite o Nome" class="inputTxt" />
                    <div id="btn">
                        <button id="btnSignin">Cadastrar</button>
                    </div>
                </div>
                <div class="input">
                    <p class="labelInput">Email</p>
                    <input type="text" placeholder="Digite o Email" class="inputTxt" />
                </div>
                <div class="input">
                    <p class="labelInput">Telefone</p>
                    <input type="text" placeholder="Digite o Telefone" class="inputTxt" />
                </div>
            </div>
    
            <div class="userList">
                <li class="listFlex">
                    <p class="name">Paulo Andre</p>
                    <div class="random">
                        <p class="email">paulo@email.com</p>
                        <p class="tell">3349 6788</p>
                    </div>
        
                    <div class="listBtn">
                        <button class="edit">Editar</button>
                        <button class="delete">Excluir</button>
                    </div>
                </li>
                <li class="listFlex">
                    <p class="name">Marcos Lucio</p>
                    <div class="random">
                        <p class="email">marcos@email.com</p>
                        <p class="tell">3349 6788</p>
                    </div>
        
                    <div class="listBtn">
                        <button class="edit">Editar</button>
                        <button class="delete">Excluir</button>
                    </div>
                </li>
                <li class="listFlex" id="end">
                    <p class="name">Laura Port</p>
                    <div class="random">
                        <p class="email">laura@email.com</p>
                        <p class="tell">3349 6788</p>
                    </div>
        
                    <div class="listBtn">
                        <button class="edit">Editar</button>
                        <button class="delete">Excluir</button>
                    </div>
                </li>
            </div>
        </div>
    
         {/* Footer */}
        <Footer />
         </div>
    )
}

export default UserPage;
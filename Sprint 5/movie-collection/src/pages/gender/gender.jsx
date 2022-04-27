import React from "react";
import logo from '../../assets/logoColored.png';
import Footer from "../../components/footer";
import mask from '../../assets/theater 1.png';
import './gender.css'

function Gender() {
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
            <div className="content">
                <p className="labelGD">Cadastrar Gênero</p>
                <div className="inputsGD">
                    <input type="text" placeholder="Gênero" className="inputGD" />
                    <button id="saveGD">Salvar</button>
                </div>
                <div className="moviesList">
                    <li className="listFlexGD">
                        <p className="name">Terror</p>
                        <div className="random">
                            <p className="category"></p>
                            <p className="tell"></p>
                        </div>
            
                        <div className="listBtnGD">
                            <button className="edit">Editar</button>
                            <button className="delete">Excluir</button>
                        </div>
                    </li>
                    <li className="listFlexGD">
                        <p className="name">Ação</p>
                        <div className="random">
                            <p className="category"></p>
                            <p className="tell"></p>
                        </div>
            
                        <div className="listBtnGD">
                            <button className="edit">Editar</button>
                            <button className="delete">Excluir</button>
                        </div>
                    </li>
                    <li className="listFlexGD" id="end">
                        <p className="name">Comédia</p>
                        <div className="random">
                            <p className="category"></p>
                            <p className="tell"></p>
                        </div>
            
                        <div className="listBtnGD">
                            <button className="edit">Editar</button>
                            <button className="delete">Excluir</button>
                        </div>
                    </li>
                </div>       
            </div>
            </div>

        {/* Footer */} 
        <Footer />
        </>
    )
}

export default Gender;
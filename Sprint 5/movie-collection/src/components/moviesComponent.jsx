import React, { useState } from "react";
import { getApi } from "../api";
import { Movies } from "../pages/movies/movies";
import './css/moviesComponent.css'

export const MoviesComponent = (props) => {

    const [Mode, setMode] = useState('off')
    const [Name, setName] = useState(props.obj.name);
    const [Gender, setGender] = useState(props.obj.gender);

    
    const $edit = id => {
        if(Mode === 'off') {
            setMode('on')
        } else if(Mode === 'Change') {
            setMode('off')
        }

    }

    const $save = id => {

        let UpdateName = document.getElementById('editName' + id).value;
        let UpdateGender = document.getElementById('editGender' + id).value;

        let data = {
            name: UpdateName,
            gender: UpdateGender
        }

        getApi.put(`Movies/${props.obj.id}`, data).then(res => {
            new Movies().list(props.setMoviesState);
            return setMode('off')
        })
    }

    const $delete = () => {
        getApi.delete(`Movies/${props.obj.id}`).then(res => {
            new Movies().list(props.setMoviesState)
        })
    }
    
    let modelInput = () =>  {
        return (
            <>
            <div className="contentListMV">
                <div className="moviesList">
                    <li className="listFlexMV">
                        <p className="name">{props.obj.name}</p>
                        <div className="randomMV">
                            <p className="category">{props.obj.gender}</p>
                            <p className="tell"></p>
                        </div>
            
                        <div className="listBtnMV">
                        <button className={"edit " + props.obj.id} onClick={() => $edit(props.obj.id)}>Editar</button>
                        <button className={"delete " + props.obj.id} onClick={() => $delete(props.obj.id)}>Excluir</button>
                        </div>
                    </li>
                </div>       
            </div>

            <div className={"opacity " + Mode}>
                <div className={"modal " + Mode}>
                    <div className="centerModal">
                    <div className="topModal">
                    <h1 className="titleModal">Edit Mode</h1>
                    <p className="close " onClick={() => setMode('off')}>X</p>
                    </div>
                    <div className="contentModalEdit">

                        <input 
                        type="text"
                        value={Name}
                        onChange={x => setName(x.target.value)}
                        id={"editName" + props.obj.id}
                        className="inputEdit"
                        />

                        <select 
                        name="gender"
                        className="inputEdit"
                        id={"editGender" + props.obj.id}>
                        {props.gender.map(x => <option key={x.id}>{x.name}</option>)}
                        </select>

                        <button id="saveMV" onClick={() => $save(props.obj.id)}>Salvar</button>
                    </div>
                </div>
            </div>
        </div>
        </>
        )
    }
    let normal = () => {
        return (
            <>

          <div className={"opacity " + Mode} >
            <div className={"modal " + Mode} >
                <div className="centerModal">
                    <div className="topModal">
                    <h1 className="titleModal">Edit Mode</h1> 
                    <p className="close " onClick={() => setMode('off')}>X</p>
                    </div>
                </div>
            </div>
          </div>

            <div className="contentListMV">
                <div className="moviesList">
                    <li className="listFlexMV">
                        <p className="name">{props.obj.name}</p>
                        <div className="randomMV">
                            <p className="category">{props.obj.gender}</p>
                            <p className="tell"></p>
                        </div>
            
                        <div className="listBtnMV">
                        <button className={"edit " + props.obj.id} onClick={() => $edit(props.obj.id)}>Editar</button>
                        <button className={"delete " + props.obj.id} onClick={() => $delete(props.obj.id)}>Excluir</button>
                        </div>
                    </li>
                </div>       
            </div>

            <div className={"opacity " + Mode} >
                <div className={"modal " + Mode} >
                    <div className="centerModal">
                        <div className="topModal">
                        <h1 className="titleModal">Edit Mode</h1>
                        <p className="close " onClick={() => setMode('off')}>X</p>
                        </div>
                        <div className="contentModalEdit">

                            <input 
                            type="text"
                            value={Name}
                            onChange={x => setName(x.target.value)}
                            id={"editName" + props.obj.id}
                            className="inputEdit"
                            />

                            <input 
                            type="text" 
                            value={Gender} 
                            onChange={x => setGender(x.target.value)}
                            id={"editGender" + props.obj.id}
                            className="inputEdit"
                            />

                            <button id="saveMV" onClick={() => $save(props.obj.id)}>Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }

    let qualquer = false

    if(props.sobj > 0 || qualquer === true) {
        return normal()
    } else {
        qualquer = true
        return modelInput();
    }
}
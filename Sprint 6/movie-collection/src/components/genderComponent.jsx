import React, { useState } from "react";
import { getApi } from "../api";
import { GenderList } from "../pages/movies/movies";
import './css/genderComponent.css'

export const GenderComponent = (props) => {

    const [Mode, setMode] = useState('off')
    const [Name, setName] = useState(props.obj.name);

    
    const $edit = id => {
        if(Mode === 'off') {
            setMode('on')
        }

    }

    const $save = id => {
        let UpdateName = document.getElementById('editName' + id).value;
        let data = {
            name: UpdateName,
        }

        getApi.put(`Gender/${props.obj.id}`, data).then(res => {
            new GenderList().list(props.setGenderState);
            return setMode('off')
        })
    }

    const $delete = () => {
        getApi.delete(`Gender/${props.obj.id}`).then(res => {
            new GenderList().list(props.setGenderState)
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
                            <p className="category"></p>
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
                            <p className="category"></p>
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
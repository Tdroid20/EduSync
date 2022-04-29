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
        } else if(Mode === 'Change') {
            setMode('off')
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
    let normal = () => {
        return (
            <>
            <div className="contentUser">
                <div className="genderList">
                    <li className="listFlexGD">
                        <p className="name">{props.obj.name}</p>
                        <div className="randomGD">
                            <p className="category"></p>
                            <p className="tell"></p>
                        </div>
            
                        <div className="listBtnGD">
                            <button className="edit" onClick={() => $edit(props.gender.id)}>Editar</button>
                            <button className="delete" onClick={() => $delete(props.gender.id)}>Excluir</button>
                        </div>
                    </li>
                </div>
            </div>
            </>
        )
    }
    
    let modelInput = () => {
        return (
            <>
            <div className="contentUser">
                <div className="genderList">
                    <li className="listFlexGD">
                        <p className="name">{props.obj.name}</p>
                        <div className="randomGD">
                            <p className="category"></p>
                            <p className="tell"></p>
                        </div>
            
                        <div className="listBtnGD">
                            <button className="edit" onClick={() => $edit(props.gender.id)}>Editar</button>
                            <button className="delete" onClick={() => $delete(props.gender.id)}>Excluir</button>
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

    let qualquer = false

    if(props.sobj > 0 || qualquer === true) {
        return normal()
    } else {
        qualquer = true
        return modelInput();
    }
}
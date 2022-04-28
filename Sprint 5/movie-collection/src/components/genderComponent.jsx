import React, { useState } from "react";
import { getApi } from "../api";
import './css/genderComponent.css'

export const GenderComponent = (props) => {

    const [Mode, setMode] = useState('off');
    
    const $edit = id => {

        if(Mode === 'off') {
            setMode('on')
            
        } else if(Mode === 'change') {
            setMode('off')
        }
    }

    const $delete = id => {
        getApi.delete(`Gender/${id}`).then(res => {
            console.log(res.data)
            window.location.reload()
        })
    }

    return (
        <>
        <div className="contentUser">
            <div className="genderList">
                <li className="listFlexGD">
                    <p className="name">{props.gender.name}</p>
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
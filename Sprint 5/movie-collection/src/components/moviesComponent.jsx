import React, { useState } from "react";
import { getApi } from "../api";
import './css/moviesComponent.css'

export const MoviesComponent = (props) => {

    
    const $edit = id => {
        
        const [Mode, setMode] = useState('off')

        if(Mode === 'off') {
            setMode('on')
        } else if(Mode === 'Change') {
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
        <div className="contentListMV">
            <div className="moviesList">
                <li className="listFlexMV">
                    <p className="name">{props.obj.name}</p>
                    <div className="randomMV">
                        <p className="category">{props.obj.gender}</p>
                        <p className="tell"></p>
                    </div>
        
                    <div className="listBtnMV">
                    <button className="edit" onClick={() => $edit(props.gender.id)}>Editar</button>
                    <button className="delete" onClick={() => $delete(props.gender.id)}>Excluir</button>
                    </div>
                </li>
            </div>       
        </div>
        </>
    )
}
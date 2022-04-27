import React, { useEffect, useState } from "react";
import { getApi } from "../api";
import '../components/css/userComponet.css';


export function UserComponents(props) {

    const [Mode, setMode] = useState('off');
    
    const $edit = id => {
            let buttonState = document.getElementById('btn')
            console.log(buttonState)

        if(Mode === 'off') {
            setMode('on')
            buttonState.innerHTML = `<button id="btnSave">Salvar</button>`
        } else if(Mode === 'change') {
            buttonState.innerHTML = ``
            buttonState.innerHTML = `<button id="btnSignin">Cadastrar</button>`
            setMode('off')
        }
    }

    const $delete = id => {
        getApi.delete(`Users/${id}`).then(res => {
            console.log(res.data)
            window.location.reload()
        })
    }

    return (
        <>
        <div className="contentUser">
            <div className="userList">
                <li className="listFlex">
                    <p className="name">{props.obj.user}</p>
                    <div className="random">
                        <p className="email">{props.obj.email}</p>
                        <p className="tellUser">{props.obj.phone}</p>
                    </div>
        
                    <div className="listBtn">
                        <button className={"edit "+ Mode} id="editBtn" onClick={() => $edit(props.obj.id) }>Editar</button>
                        <button className="delete" onClick={() => $delete(props.obj.id)}>Excluir</button>
                    </div>
                </li>
            </div>
        </div>
        </>
    )
}
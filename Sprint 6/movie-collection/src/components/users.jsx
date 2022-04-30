import React, { useState } from "react";
import { getApi } from "../api";
import '../components/css/userComponet.css';
import { UserApi } from "../pages/movies/movies";


export function UserComponents(props) {

    let setMode = props.setMode;
    let Mode = props.Mode;
    const [Name, setName] = useState(props.obj.user);
    const [Email, setEmail] = useState(props.obj.email);
    const [Phone, setPhone] = useState(props.obj.phone);

    
    const $edit = id => {
        if(Mode === 'off') {
            setMode('on')
        } else if(Mode === 'Change') {
            setMode('off')
        }

    }

    const $save = id => {

        let UpdateName = document.getElementById('editName' + id).value;
        let UpdateEmail = document.getElementById('editEmail' + id).value;
        let UpdatePhone = document.getElementById('editPhone' + id).value;

        let data = {
            user: UpdateName,
            email: UpdateEmail,
            phone: UpdatePhone
        }

        getApi.put(`Users/${props.obj.id}`, data).then(res => {
            getApi.get('Users').then(res => {
                props.setUser(res.data)
            })
            return setMode('off')
        })
    }

    const $delete = () => {
        getApi.delete(`Users/${props.obj.id}`).then(res => {
            new UserApi().list(props.setUser)
        })
    }
    
    let modelInput = () =>  {
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
                        <button className={"edit "} id="editBtn" onClick={() => $edit(props.obj.id) }>Editar</button>
                        <button className="delete" onClick={() => $delete(props.obj.id)}>Excluir</button>
                    </div>
                </li>
            </div>
        </div>

        <div className={"opacityUser " + Mode}>
                <div className={"modalUser " + Mode}>
                    <div className="centerModalUser">
                    <div className="topModalUser">
                    <h1 className="titleModalUser">Edit Mode</h1>
                    <p className="closeUser " onClick={() => setMode('off')}>X</p>
                    </div>
                    <div className="contentModalEditUser">

                        <input 
                        type="text"
                        value={Name}
                        onChange={x => setName(x.target.value)}
                        id={"editName" + props.obj.id}
                        className="inputEditUser"
                        />

                        <input 
                        type="text"
                        value={Email}
                        onChange={x => setEmail(x.target.value)}
                        id={"editEmail" + props.obj.id}
                        className="inputEditUser"
                        />
                        
                        <input 
                        type="text"
                        value={Phone}
                        onChange={x => setPhone(x.target.value)}
                        id={"editPhone" + props.obj.id}
                        className="inputEditUser"
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
            <div className="contentUser">
            <div className="userList">
                <li className="listFlex">
                    <p className="name">{props.obj.user}</p>
                    <div className="random">
                        <p className="email">{props.obj.email}</p>
                        <p className="tellUser">{props.obj.phone}</p>
                    </div>
        
                    <div className="listBtn">
                        <button className={"edit "} id="editBtn" onClick={() => $edit(props.obj.id) }>Editar</button>
                        <button className="delete" onClick={() => $delete(props.obj.id)}>Excluir</button>
                    </div>
                </li>
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

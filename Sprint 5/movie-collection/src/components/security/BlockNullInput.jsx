import React from "react";
import './bni.css'

export const BlockNullInput = (props) => {
    let field = props.field;
    let setStatus = props.setStatus;
    let Status= props.Status;
    let UserName = props.UserName

    console.log(`Opam ${Status}`)

    return (
        <div className={"opacityErro " + Status} >
                <div className={"modalErro " + Status} >
                    <div className="centerModalErro">
                        <div className="topModalErro">
                        <h1 className="titleModalErro">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                            <p className="space">Erro</p>
                            <i class="fa-solid fa-triangle-exclamation"></i></h1>
                        <p className="closeErro " onClick={() => setStatus('ok')}>X</p>
                        </div>
                        <div className="contentModalEditErro">
                            <p className="errorDescriptionErro">Ops! O Sr(a). <span className="NameColor">{UserName === undefined ? ' ' : UserName + ' '}</span>não preencheu o campo {field}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
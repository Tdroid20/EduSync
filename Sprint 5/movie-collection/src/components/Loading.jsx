import React from "react";
import loading from '../assets/Loading.svg';
import './css/Loading.css';

export const LoadingComponent = () => {
    return (
        <div className="opacaityLoading">
            <div className="loader_container">
                <img className="loader" src={loading} alt="Loading" />
            </div>
        </div>
      );
}
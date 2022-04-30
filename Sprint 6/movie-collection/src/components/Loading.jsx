import React from "react";
import Loading from './css/Loading.css'
import Loading from '../assets/Loading.svg'

const LoadingComponent = () => {
    return (
        <div className="loader_container">
          <img className="loader" src={loading} alt="Loading" />
        </div>
      );
}
import React, {useState} from 'react';
import './Modal.css';

const Modal = ({pokemon, setOpenModal, openModal}) => { 

    const close = ()=>{
        setOpenModal(!openModal);
    }
    return (
        <div>
            <div className="modalbackground">
                <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <button onClick={close}>X</button>
                    </div>

                    <div className="title">
                <h1>{pokemon.name}</h1>
                </div>
                <div className="body">
                <p>Height: {pokemon.height}</p>
                <p>Base Experience: {pokemon.base_experience}</p>
                <p>{pokemon.stats.map((stat)=>{
                    return <div>{stat.stat.name} : {stat.base_stat}</div>
                })}</p>
                </div>
                <div className="footer">
                <button
                    onClick={() => {
                        setOpenModal(false);
                    }}
                    id="cancelBtn"
                >
                    Close
                </button>
                </div>
                </div>
            </div>
        </div>
    )
}


export default Modal;
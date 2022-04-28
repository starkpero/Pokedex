import React,{useState} from 'react';
import Modal from '../Modal/Modal'
import './Pokemon.css';


const Pokemon = ({pokemon})=>{
    //const [openModal, setOpenModal] = useState(false);
 
    return (
        <div>
            {/* {openModal ? (<Modal pokemon={pokemon} setOpenModal={setOpenModal} openModal={openModal}/>) : (
                openModal? null: */}
            <div className="pokemon-card">
                <div className="pokemon-img-container">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}  className="pokemon-img"/>
                </div>
                <div className="card-body">
                    <div className="card-top">
                         <h3>{pokemon.name}</h3>
                        <div>#{pokemon.id}</div>
                    </div>
                    <div className="card-bottom">
                        <div className="pokemon-type">
                            {pokemon.types.map((type,idx)=>{
                                return (
                                    <div key={idx} className="pokemon-type-text">{type.type.name}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>)
        </div>
    )
}

export default Pokemon;
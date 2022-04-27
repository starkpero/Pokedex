import React from 'react';
import Pokemon from '../Pokemon/Pokemon';
import './Pokedex.css';


const Pokedex = ({pokemons})=>{
    console.log(pokemons);
    return (
        <>
            <div className="header">
                <div><p>Pokedex</p></div>
                <div>Pagination</div>
            </div>
            <div className="pokedex-grid">
                {pokemons.map((pokemon,idx)=>{
                    return (
                        <Pokemon pokemon={pokemon} key={pokemon.name}/>
                    )
                })}
            </div>
        </>
    )
}


export default Pokedex;
import React from 'react';


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
                        <div key={pokemon.name}>
                            #{idx+1}: {pokemon.name}
                        </div>
                    )
                })}
            </div>
        </>
    )
}


export default Pokedex;
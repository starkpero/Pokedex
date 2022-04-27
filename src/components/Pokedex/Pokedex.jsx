import React from 'react';
import Pokemon from '../Pokemon/Pokemon';
import Pagination from '../Pagination/Pagination';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './Pokedex.css';


const Pokedex = ({pokemons, page, setPage, totalPages, loading}) =>{
    const lastPage = ()=>{
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
    }

    const nextPage = ()=>{
        const nextPage = Math.min(page + 1, totalPages);
        setPage(nextPage);
    }

    return (
        <>
            <div className="header">
                <div><p>Pokedex</p></div>
                <Pagination page={page+1} totalPages={totalPages} onLeftClick={lastPage} onRightClick={nextPage}/>
            </div>
            {loading ? 
            <LoadingSpinner/> : 
            <div className="pokedex-grid">
                {pokemons.map((pokemon,idx)=>{
                    return (
                        <Pokemon pokemon={pokemon} key={pokemon.name}/>
                    )
                })}
            </div>
            }
        </>
    )
}


export default Pokedex;
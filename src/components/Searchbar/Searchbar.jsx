import React, {useState} from 'react'
import './Searchbar.css';
import { searchPokemon } from '../../api/Api';

const Searchbar = () => {
    let [search, setSearch] = useState('');

    const searchBar = (e)=>{
        //console.log(e.target.value);
        setSearch(e.target.value);
    }

    const loadPokemon = async(e)=>{
        const data = await searchPokemon(search);
        console.log(data);
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Search Pokemon..." onChange={searchBar}/>
            </div>
            <div className="searchbar-btn">
                <button onClick={loadPokemon}> Search </button>
            </div>
        </div>
    )
}


export default Searchbar;
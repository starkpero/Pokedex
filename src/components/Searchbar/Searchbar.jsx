import React, {useState} from 'react'
import './Searchbar.css';
import { searchPokemon } from '../../api/Api';

const Searchbar = ({onSearch}) => {
    let [search, setSearch] = useState('');

    const searchBar = (e)=>{
        setSearch(e.target.value);
        if(e.target.value.length === 0){
            onSearch = (null);
        }
    }

    const loadPokemon = async(e)=>{
        //const data = await searchPokemon(search);
        //console.log(data);
        onSearch(search);
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
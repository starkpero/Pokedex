import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/Searchbar/Searchbar';
import Pokedex from './components/Pokedex/Pokedex';
import {getPokemons} from './api/Api';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async ()=>{
    try{
      const data = await getPokemons();
      setPokemons(data.results);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchPokemons();
  }, []);


  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <Pokedex pokemons={pokemons}/>
    </div>
  );
}

export default App;

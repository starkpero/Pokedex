import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/Searchbar/Searchbar';
import Pokedex from './components/Pokedex/Pokedex';
import {getPokemonData, getPokemons} from './api/Api';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async ()=>{
    try{
      const data = await getPokemons();
      //setPokemons(data.results);
       console.log(data.results);
       const promises = data.results.map(async (pokemon) => {
         return await getPokemonData(pokemon.url);
       });

       const results = await Promise.all(promises);
       setPokemons(results);
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

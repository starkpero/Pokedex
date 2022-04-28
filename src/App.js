import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/Searchbar/Searchbar';
import Pokedex from './components/Pokedex/Pokedex';
import {getPokemonData, getPokemons, searchPokemon} from './api/Api';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const fetchPokemons = async ()=>{
    try{
      setLoading(true);
      const data = await getPokemons(25, 25*page);
       //console.log(data);
       const promises = data.results.map(async (pokemon) => {
         return await getPokemonData(pokemon.url);
       });

       const results = await Promise.all(promises);
       setPokemons(results);
       setLoading(false);
       setTotal(Math.ceil(data.count / 25));
       setNotFound(false);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    if(!searching){
      fetchPokemons();
    }
  }, [page]);

  const onSearch = async (pokemon)=>{
    if(!pokemon){
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if(!result){
      setNotFound(true);
      setLoading(false);
      return;
    }else{
      //console.log(result);
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
   
    setLoading(false);
    setSearching(false);
  }


  return (
    <div>
      <Navbar/>
      <SearchBar onSearch={onSearch}/>
        {notFound?(<div className="not-found-text">No such pokemon found</div>):
         <Pokedex
          loading={loading}
          pokemons={pokemons}
          page={page} 
          setPage={setPage}
          totalPages={total}  
        />
        }
    </div>
  );
}

export default App;

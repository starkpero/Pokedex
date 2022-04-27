import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/Searchbar/Searchbar';
import Pokedex from './components/Pokedex/Pokedex';
import {getPokemonData, getPokemons} from './api/Api';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async ()=>{
    try{
      setLoading(true);
      const data = await getPokemons(25, 25*page);
       console.log(data.results);
       const promises = data.results.map(async (pokemon) => {
         return await getPokemonData(pokemon.url);
       });

       const results = await Promise.all(promises);
       setPokemons(results);
       setLoading(false);
       setTotal(Math.ceil(data.count / 25));
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchPokemons();
  }, [page]);


  return (
    <div>
      <Navbar/>
      <SearchBar/>
         <Pokedex
          loading={loading}
          pokemons={pokemons}
          page={page} 
          setPage={setPage}
          totalPages={total}  
        />
    </div>
  );
}

export default App;

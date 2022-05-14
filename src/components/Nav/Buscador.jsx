import { useState } from 'react'
import {Card} from "../Card/Card"
import '../Api/pokemon.css'

function Buscador({results}) {
const [pokemonFilter, setPokemonFilter] = useState("") ;

  return (

    <div className="app">
      <div className='search'>
        <input 
        placeholder="Buscar"  
        name="query" 
        type="search" 
        onChange={(event)=>{setPokemonFilter(event.target.value)}} 
        />
      </div>
      {results
      .filter((val)=> {
        return val.name.toLowerCase().includes(pokemonFilter.toLowerCase())})
      .map((val)=>{
        return <Card results={val} />
      })}
    </div>
  );
}

export default Buscador;

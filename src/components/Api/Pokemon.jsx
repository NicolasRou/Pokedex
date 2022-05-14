import { Usefetch } from "../Api/Usefetch";
import { useEffect, useState } from "react";
import Buscador from "../Nav/Buscador";
import "./pokemon.css";

// Este componente representa la pagina con el listado

const Pokemon = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const pokemons = Usefetch(url); //pokemons tiene como valor el objeto que nos devuelve Usefetch con sus atributos
  const { loading, data } = pokemons;
  //   loading ? console.log("cargando") : console.log(data.results);
  const [pokemon, setPokemon] = useState(data);
  

  useEffect(() => {
    if (data) {
      setPokemon(data.results);
    }
  }, [data]);

  const onClickAZ = () => {
    const pokemonClone = [...pokemon];

    pokemonClone.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    );

    setPokemon(pokemonClone);
  };

  
  const onClick123 = () => {
    const pokemonClone = [...pokemon];

    pokemonClone.sort((a, b) =>
      a.id - b.id ? 1 : -1
    );

    setPokemon(pokemonClone);
  };

  const onClickZA = () => {
    const pokemonClone = [...pokemon];

    pokemonClone.sort((a, b) =>
      a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
    );

    setPokemon(pokemonClone);
  };

  return (
    <div className="arreglo">

    <button onClick={onClickAZ} className="button-29">AZ 🠕</button>
    <button onClick={onClickZA} className="button-29">AZ 🠗</button>
    <button onClick={onClick123} className="button-29">123</button>
                  
      {loading ? <h1>Cargando...</h1> : <Buscador results={pokemon} />}

      <div className="button-contain">
      {!loading && data.previous != null && <button onClick={() => setUrl(data.previous)} className="button">
          Anterior
        </button>}
        <button onClick={() => setUrl(data.next)} className="button">
          Siguiente
        </button>
      </div>
    </div>
  );
};
export default Pokemon;

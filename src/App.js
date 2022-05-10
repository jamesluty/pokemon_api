import { useState } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([])
  
  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response.results)
        setPokemon(response.results)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="App">
      <button className='button' onClick={fetchPokemon}>Fetch Pokemon</button>
      <hr />
      <ol className="list">
        {pokemon.map( (pokemon, id) => {
          return <li key={id}>{pokemon.name}</li>
        })}
      </ol>
    </div>
  );
}

export default App;

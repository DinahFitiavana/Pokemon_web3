import React, { useServerState, useServerEffect } from 'react';
import PokemonList from '../components/PokemonList';

const ServerHome = () => {
  const [pokemons, setPokemons] = useServerState([]);

  useServerEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');
      const data = await response.json();
      const pokemonList = data.results.map((pokemon, index) => ({
        id: index + 1,
        name: pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        route: 'server'
      }));
      setPokemons(pokemonList);
    };
    fetchData();
  }, []);

  return <PokemonList pokemons={pokemons} />;
};

export default ServerHome;

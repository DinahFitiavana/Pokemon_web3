
'use client'
import React, { useClientState, useClientEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import PokemonList from '../components/PokemonList';

const ClientHome = () => {
  const navigation = useRouter(); // Utilisez useRouter à la place de useRouter
  const [pokemons, setPokemons] = useClientState([]);

  useClientEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');
      const data = await response.json();
      const pokemonList = data.results.map((pokemon, index) => ({
        id: index + 1,
        name: pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        route: 'client'
      }));
      setPokemons(pokemonList);
    };
    fetchData();
  }, []);

  return <PokemonList pokemons={pokemons} />;
};

export default ClientHome;

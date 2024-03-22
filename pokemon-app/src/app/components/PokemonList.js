import React from 'react';
import Link from 'next/link';

const PokemonList = ({ pokemons }) => {
  return (
    <div>
      {pokemons.map(pokemon => (
        <div key={pokemon.id}>
          <img src={pokemon.image} alt={pokemon.name} />
          <p>{pokemon.name}</p>
          <Link href={`/${pokemon.route}/${pokemon.id}`}>
            <a>Détails</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;

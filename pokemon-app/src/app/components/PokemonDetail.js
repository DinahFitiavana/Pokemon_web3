import React from 'react';

const PokemonDetail = ({ pokemon }) => {
  return (
    <div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Nom: {pokemon.name}</p>
      <p>Taille: {pokemon.height}</p>
      <p>Poids: {pokemon.weight}</p>
      <p>Types: {pokemon.types.map(type => type.type.name).join(', ')}</p>
      <p>Numéro: {pokemon.order}</p>
    </div>
  );
};

export default PokemonDetail;

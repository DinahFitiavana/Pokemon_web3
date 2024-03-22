import React, { useState, useEffect } from 'react';
import PokemonDetail from '../../components/PokemonDetail';

const ClientPokemonDetail = ({ pokemonId }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const data = await response.json();
      setPokemon(data);
    };
    fetchData();
  }, [pokemonId]);

  return <PokemonDetail pokemon={pokemon} />;
};

export async function getServerSideProps({ params }) {
  return {
    props: {
      pokemonId: params.id
    }
  };
}

export default ClientPokemonDetail;

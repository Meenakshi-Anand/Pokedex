import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PokemonIndexItem from './pokemon_index_item';

  class PokemonIndex extends Component {
    componentDidMount() {
      this.props.requestAllPokemon();
    }
    render(){
      const { pokemon} = this.props;
      return(
      <div className="pokedex">
      <ul>
         {pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}
       </ul>
      </div>);
    }
  }

  export default PokemonIndex;

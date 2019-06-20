import React, { Component } from 'react'
import PokemonList from './affichpok'
import Pokechearch from './Pokechearch'
export default class App extends Component {
  render() {
    return (
      <div>
        <Pokechearch></Pokechearch>
        <PokemonList> </PokemonList>
      </div>
    )
  }
}

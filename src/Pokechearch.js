import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import React, { Component } from 'react';
import { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Input, Button, Container } from 'semantic-ui-react';
serviceWorker.unregister();





class PokemonSearch extends Component {
    state = {
      search: '',
      pokemon: null,
      loading: false
    }
  
    bindField = () => ({
      value: this.state.search,
      onChange: (e) => this.setState({ search: e.target.value })
    })
  
    handleSubmit = (e) => {
      e.preventDefault()
      this.fetchPokemon(this.state.search)
    }
  
    async fetchPokemon(id) {
      this.setState({ loading: true })
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await res.json()
      this.setState({ pokemon: data, loading: false })
    }
  
    render() {
      const { pokemon, loading } = this.state
      const fetched = !loading && pokemon && pokemon.id
      const notFound = !loading && pokemon && !pokemon.id
  
      return (
        <Container>
          <form className="search-bar" onSubmit={this.handleSubmit}>
            <Input {...this.bindField() } type="number" />{' '}
            <Button onClick={this.findByField}>Fetch Pokemon by ID</Button>
          </form>
  
          {loading && (
            <div>Loading...</div>
          )}
  
          {fetched && (
            <div>
              <div><small>[{pokemon.id}]</small> <strong>{pokemon.name}</strong></div>
              <div><img src={pokemon.sprites.back_default} /> <img src={pokemon.sprites.front_default} /></div>
            </div>
          )}
  
          {notFound && (
            <div>Did not find this pokemon</div>
          )}
        </Container>
      );
    }
  }
  
 export default PokemonSearch;
  
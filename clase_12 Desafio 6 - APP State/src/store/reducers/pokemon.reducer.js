import { FILTERED_POKEMON, SELECTED_POKEMON } from "../actions/pokemons.action"

import { POKEMON } from "../../data/pokemons"

const initialState = {
  pokemons: POKEMON,
  filteredPokemon: [],
  selected: null,
}

const PokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_POKEMON:
      return {
        ...state,
        selected: state.pokemons.find(
          pokemon => pokemon.id === action.pokemonId
        ),
      }
    case FILTERED_POKEMON:
      return {
        ...state,
        filteredPokemon: state.pokemons.filter(
          pokemon => pokemon.category === action.categoryId
        ),
      }
    default:
      return state
  }
}

export default PokemonReducer
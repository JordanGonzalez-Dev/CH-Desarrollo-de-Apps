export const SELECTED_POKEMON = "SELECTED_POKEMON"
export const FILTERED_POKEMON = "FILTERED_POKEMON"

export const selectedPokemon = id => ({
  type: SELECTED_POKEMON,
  pokemonId: id,
})

export const filteredPokemon = id => ({
  type: FILTERED_POKEMON,
  categoryId: id,
})
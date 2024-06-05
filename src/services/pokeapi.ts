import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Pokemon, PokemonQueryParams } from "../interfaces/pokemon.interface"
import { BASE_URL } from '@env'

/**
 * pokemonApi provides endpoints for fetching Pokemon data.
 */
export const pokemonApi = createApi({
  reducerPath: 'pokeapi', /**< The slice name for the reducer. */
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }), /**< The base query configuration including the base URL. */
  endpoints: (builder) => ({
    /**
     * Retrieves a list of Pokemon.
     * @param offset - The offset for pagination.
     * @param limit - The maximum number of Pokemon to retrieve.
     */
    getPokemons: builder.query<{ results: Pokemon[]; count: number }, PokemonQueryParams>({
      query: ({ offset, limit }) => `pokemon?offset=${offset}&limit=${limit}`,
    }),
    /**
     * Retrieves a Pokemon by its ID.
     * @param id - The ID of the Pokemon to retrieve.
     */
    getPokemonById: builder.query<Pokemon, number>({
      query: (id) => `pokemon/${id}`,
    }),
  }),
})

/** 
 * Custom React hooks for using the getPokemons and getPokemonById queries.
 */
export const { useGetPokemonsQuery, useGetPokemonByIdQuery } = pokemonApi
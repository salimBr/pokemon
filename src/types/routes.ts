/**
 * Root stack parameters.
 */

import Routes from "../constants/routes.constants";

export type RootStackParams = {
    [Routes.PokemonListScreen]: undefined;
    [Routes.PokemonDetailsScreen]: {
      title : string,
      id : number
    };
  };

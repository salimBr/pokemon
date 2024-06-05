import { ImageSourcePropType } from "react-native";

/**
 * Represents a Pokemon entity.
 */
export interface Pokemon {
  id: number; /**< The unique identifier for the Pokemon. */
  name: string; /**< The name of the Pokemon. */
  base_experience: number; /**< The base experience gained when defeating this Pokemon. */
  height: number; /**< The height of the Pokemon. */
  weight: number; /**< The weight of the Pokemon. */
  abilities: Ability[]; /**< The abilities of the Pokemon. */
  forms: NamedAPIResource[]; /**< The forms of the Pokemon. */
  game_indices: GameIndex[]; /**< The game indices of the Pokemon. */
  held_items: HeldItem[]; /**< The items held by the Pokemon. */
  location_area_encounters: string; /**< The location area encounters for the Pokemon. */
  moves: Move[]; /**< The moves learned by the Pokemon. */
  species: NamedAPIResource; /**< The species of the Pokemon. */
  sprites: Sprites; /**< The sprites of the Pokemon. */
  stats: Stat[]; /**< The stats of the Pokemon. */
  types: Type[]; /**< The types of the Pokemon. */
  image : ImageSourcePropType; /**< The image source for the Pokemon. */
}

/**
* Represents an ability of a Pokemon.
*/
export interface Ability {
  ability: NamedAPIResource; /**< The ability. */
  is_hidden: boolean; /**< Indicates if the ability is hidden. */
  slot: number; /**< The slot for the ability. */
}

/**
* Represents a named API resource.
*/
export interface NamedAPIResource {
  name: string; /**< The name of the resource. */
  url: string; /**< The URL of the resource. */
}

/**
* Represents a game index.
*/
export interface GameIndex {
  game_index: number; /**< The game index. */
  version: NamedAPIResource; /**< The version of the game. */
}

/**
* Represents a held item.
*/
export interface HeldItem {
  item: NamedAPIResource; /**< The held item. */
  version_details: {
      version: NamedAPIResource; /**< The version of the item. */
      rarity: number; /**< The rarity of the item. */
  }[];
}

/**
* Represents a move.
*/
export interface Move {
  move: NamedAPIResource; /**< The move. */
  version_group_details: {
      level_learned_at: number; /**< The level at which the move is learned. */
      version_group: NamedAPIResource; /**< The version group. */
      move_learn_method: NamedAPIResource; /**< The method of learning the move. */
  }[];
}

/**
* Represents the sprites of a Pokemon.
*/
export interface Sprites {
  front_default: string; /**< The default front sprite. */
  front_shiny: string; /**< The shiny front sprite. */
  front_female: string | null; /**< The female front sprite, if available. */
  front_shiny_female: string | null; /**< The shiny female front sprite, if available. */
  back_default: string; /**< The default back sprite. */
  back_shiny: string; /**< The shiny back sprite. */
  back_female: string | null; /**< The female back sprite, if available. */
  back_shiny_female: string | null; /**< The shiny female back sprite, if available. */
  other: OtherSprites; /**< Other variations of sprites. */
}

/**
* Represents other sprite variations of a Pokemon.
*/
export interface OtherSprites {
  dream_world: DreamWorldSprites; /**< The dream world sprite. */
  home: HomeSprites; /**< The home sprite. */
  "official-artwork": OfficialArtworkSprites; /**< The official artwork sprite. */
  showdown: ShowdownSprites; /**< The showdown sprite. */
}

/**
* Represents the dream world sprites of a Pokemon.
*/
export interface DreamWorldSprites {
  front_default: string; /**< The default dream world sprite. */
  front_female: string | null; /**< The female dream world sprite, if available. */
}

/**
* Represents the home sprites of a Pokemon.
*/
export interface HomeSprites {
  front_default: string; /**< The default home sprite. */
  front_female: string | null; /**< The female home sprite, if available. */
  front_shiny: string; /**< The shiny home sprite. */
  front_shiny_female: string | null; /**< The shiny female home sprite, if available. */
}

/**
* Represents the official artwork sprites of a Pokemon.
*/
export interface OfficialArtworkSprites {
  front_default: string; /**< The default official artwork sprite. */
  front_shiny: string; /**< The shiny official artwork sprite. */
}

/**
* Represents the showdown sprites of a Pokemon.
*/
export interface ShowdownSprites {
  back_default: string; /**< The default showdown back sprite. */
  back_female: string | null; /**< The female showdown back sprite, if available. */
  back_shiny: string; /**< The shiny showdown back sprite. */
  back_shiny_female: string | null; /**< The shiny female showdown back sprite, if available. */
  front_default: string; /**< The default showdown front sprite. */
  front_female: string | null; /**< The female showdown front sprite, if available. */
  front_shiny: string; /**< The shiny showdown front sprite. */
  front_shiny_female: string | null; /**< The shiny female showdown front sprite, if available. */
}

/**
* Represents a stat of a Pokemon.
*/
export interface Stat {
  base_stat: number; /**< The base value of the stat. */
  effort: number; /**< The effort points for the stat. */
  stat: NamedAPIResource; /**< The stat. */
}

/**
* Represents a type of a Pokemon.
*/
export interface Type {
  slot: number; /**< The slot of the type. */
  type: NamedAPIResource; /**< The type. */
}

/**
* Represents the query parameters for retrieving Pokemon data.
*/
export interface PokemonQueryParams {
  offset: number; /**< The offset for pagination. */
  limit: number; /**< The limit of results per page. */
}
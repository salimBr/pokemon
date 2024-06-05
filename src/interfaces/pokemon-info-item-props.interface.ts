import { ImageSourcePropType } from "react-native";

/**
 * Props for a component representing an item in a Pokémon information list.
 */
export interface PokemonInfoItemProps {
    /**
     * The title of the Pokémon information item.
     */
    title: string;
    
    /**
     * The value of the Pokémon information item. 
     * It can be a string, an array of strings, a number, or undefined.
     */
    value: string | string[] | undefined | number;
    
    /**
     * The unit of the value, if applicable.
     */
    unit?: string | undefined;
}

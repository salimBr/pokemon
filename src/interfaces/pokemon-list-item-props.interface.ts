/**
 * Props for a component representing a Pokémon list item.
 */
export interface PokemonListItemProps {
    /**
     * The unique identifier of the Pokémon.
     */
    id: number;
    
    /**
     * The name of the Pokémon.
     */
    name: string;
    
    /**
     * Function to be called when the Pokémon item is clicked.
     */
    onItemClick: () => void;
}

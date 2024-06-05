/**
 * Represents a simple button with a title and an onClick handler.
 */
export interface SimpleButton {
    /**
     * The title of the button.
     */
    title: string;
    
    /**
     * The function to be called when the button is clicked.
     */
    onClick: () => void;
}

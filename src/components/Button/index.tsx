import { Text, TouchableOpacity, View } from 'react-native';
import Styles from './styles';
import { SimpleButton } from '../../interfaces/button.interface';

/**
 * Button component for React Native.
 * @param {Object} props - The props object containing title and onClick function.
 * @param {string} props.title - The title/text to be displayed on the button.
 * @param {Function} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} A TouchableOpacity containing the button text.
 */
const Button: React.FC<SimpleButton> = ({ title, onClick }) => (
  <TouchableOpacity style={Styles.itemContainer} onPress={onClick}>
    <Text style={Styles.text}>{title}</Text>
  </TouchableOpacity>
);

export default Button;

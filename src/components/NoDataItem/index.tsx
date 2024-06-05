import { Image, Text, View } from 'react-native';
import Styles from './styles';
import Images from '../../constants/images.constants';
import Strings from '../../constants/en.constants';
import Button from '../Button';
import { NoData } from '../../interfaces/no-data.interface';

/**
 * Component for displaying a "No Data" item.
 * @param {Object} props - The props object containing the onClick function.
 * @param {Function} props.onClick - The function to be called when the retry button is clicked.
 * @returns {JSX.Element} A View containing the "No Data" item components.
 */
const NoDataItem: React.FC<NoData> = ({ onClick }) => (
  <View style={Styles.itemContainer}>
    <Image
      source={Images.emptyPokeball}
      style={Styles.image}
      resizeMode="contain"
    />
    <Text style={Styles.text}>{Strings['common.emptyListTitle']}</Text>
    <Button title={Strings['button.retry']} onClick={onClick} />
  </View>
);

export default NoDataItem;

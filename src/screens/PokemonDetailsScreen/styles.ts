import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../constants/colors.constants';
import { normalizeSize } from '../../utils/normalize.utils';

const { width, height } = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems:"center",
    height:"100%",
  },
  image : {
    marginVertical: normalizeSize(15),
    width : width * 0.6,
    height : width * 0.6
  }
});

export default Styles;

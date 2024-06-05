import {Dimensions, StyleSheet} from 'react-native';
import {normalizeSize} from '../../utils/normalize.utils';

const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    height: height * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.35,
    height: width * 0.35,
    marginBottom: normalizeSize(20),
  },
  text: {
    fontSize: normalizeSize(22),
    textAlign: 'center',
  },
});

export default Styles;

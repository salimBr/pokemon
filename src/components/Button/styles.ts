import {Dimensions, StyleSheet} from 'react-native';
import { normalizeSize } from '../../utils/normalize.utils';
import colors from '../../constants/colors.constants';

const Styles = StyleSheet.create({
  itemContainer: {
    width: normalizeSize(150),
    height : normalizeSize(40),
    alignItems: 'center',
    justifyContent : "center",
    backgroundColor : colors.blue,
    borderRadius : normalizeSize(5),
    marginTop: normalizeSize(20)
  },
  text : {
    fontSize : normalizeSize(22),
    textAlign:"center",
    color : colors.white
  }
});

export default Styles;

import {StyleSheet} from 'react-native';
import { normalizeSize } from '../../utils/normalize.utils';
import { getRandomValue } from '../../utils/actions.utils';

const Styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    width:"100%",
    alignItems: 'center',
    justifyContent : "space-between",
    padding: normalizeSize(10),
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  imageContainer : {
    justifyContent:"center",
    alignItems : "center",
    flex : 0.3
  },
  image: {
    width: normalizeSize(50),
    height: normalizeSize(50),
    marginRight: normalizeSize(10),
  },
  nameContainer : {
    justifyContent:"center",
    alignItems : "center",
    flex : 0.7
  },
  name: {
    fontSize: normalizeSize(20),
    fontWeight: "600"
  },
  itemShimmerContainer : {
    borderBottomWidth: 1,
  },
  shimmerName : {
    height : normalizeSize(30),
  }
});

export default Styles;

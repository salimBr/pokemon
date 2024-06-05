import {StyleSheet} from 'react-native';
import { normalizeSize } from '../../utils/normalize.utils';

const Styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    width:"100%",
    alignItems: 'flex-start',
    justifyContent : "space-between",
    padding: normalizeSize(20),
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  titleContainer:{
    justifyContent:"center",
    alignItems:"center",
    flex : 0.3
  },
  valueContainer:{
    justifyContent:"center",
    alignItems:"center",
    flex : 0.3
  },
  title : {
    fontSize: normalizeSize(18),
    fontWeight: "800"
  },
  value : {
    fontSize: normalizeSize(18),
    fontWeight: "600"
  },
});

export default Styles;

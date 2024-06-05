import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Styles from './styles';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { getRandomValue } from '../../utils/actions.utils';

/**
 * Component for displaying a shimmering placeholder for a Pokemon list item.
 * @returns {JSX.Element} A View containing the shimmering placeholder components.
 */
const PokemonListItemShimmer: React.FC = () => {
  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  return (
    <View style={[Styles.itemContainer, Styles.itemShimmerContainer]}>
      <View style={Styles.imageContainer}>
        <ShimmerPlaceHolder style={Styles.image} />
      </View>
      <View style={Styles.nameContainer}>
        {/* Randomize the width of the shimmering text to simulate loading variation */}
        <ShimmerPlaceHolder style={[Styles.shimmerName, { width: getRandomValue(170, 200) }]} />
      </View>
    </View>
  );
};

export default React.memo(PokemonListItemShimmer);
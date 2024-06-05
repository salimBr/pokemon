import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Styles from './styles';
import { PokemonListItemProps } from '../../interfaces/pokemon-list-item-props.interface';
import { useGetPokemonByIdQuery } from '../../services/pokeapi';
import FastImage from 'react-native-fast-image';
import Images from '../../constants/images.constants';

/**
 * Component for displaying a Pokemon list item.
 * @param {Object} props - The props object containing the id, name, and onItemClick function.
 * @param {number} props.id - The ID of the Pokemon.
 * @param {string} props.name - The name of the Pokemon.
 * @param {Function} props.onItemClick - The function to be called when the item is clicked.
 * @returns {JSX.Element} A TouchableOpacity containing the Pokemon list item components.
 */
const PokemonListItem: React.FC<PokemonListItemProps> = ({ id, name, onItemClick }) => {
  const { data } = useGetPokemonByIdQuery(id);

  const [imageUri, setImageUri] = useState<string>(Images.emptyPokeball) ;

  useEffect(() => {
    if (data && data.sprites) {
      setImageUri(data.sprites.other?.showdown?.front_default);
    }
  }, [data]);

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onItemClick}>
      <View style={Styles.itemContainer}>
        <View style={Styles.imageContainer}>
          <FastImage
            style={Styles.image}
            source={{
              uri:  imageUri.toString(),
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
            defaultSource={Images.emptyPokeball.toString()}
          />
        </View>
        <View style={Styles.nameContainer}>
          <Text style={Styles.name}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(PokemonListItem);
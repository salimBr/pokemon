import React from 'react';
import { View } from 'react-native';
import Styles from './styles';
import { useCallback } from 'react';
import PokemonInfoItem from '../../components/PokemonInfoItem';
import { Type } from '../../interfaces/pokemon.interface';
import Strings from '../../constants/en.constants';
import { useGetPokemonByIdQuery } from '../../services/pokeapi';
import FastImage from 'react-native-fast-image';
import Images from '../../constants/images.constants';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParams } from '../../types/routes';
import Routes from '../../constants/routes.constants';
import { convertHeight, convertWeight } from '../../utils/actions.utils';
import { PokemonInfoItemProps } from '../../interfaces/pokemon-info-item-props.interface';

/**
 * PokemonDetailsScreen component displays detailed information about a Pokemon.
 */
const PokemonDetailsScreen: React.FC = () => {

  const route = useRoute<RouteProp<RootStackParams, Routes.PokemonDetailsScreen>>();

  const { id } = route.params;
  const { data } = useGetPokemonByIdQuery(id);

  /**
   * Formats the types of a Pokemon for display.
   * @param types - The array of types of the Pokemon.
   * @returns An array of formatted type names.
   */
  const formatTypes = (types: Type[] | undefined): string[] => {
    return types ? types.map(type => type?.type?.name).reverse() : [];
  }

  /**
   * Renders the Pokemon picture using FastImage.
   * @param imageURL - The URL of the Pokemon image.
   * @returns A JSX element representing the Pokemon image.
   */
  const renderPokemonPicture = useCallback(
    (imageURL: string | undefined) => (
      <FastImage
        style={Styles.image}
        source={{
          uri: imageURL,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
        defaultSource={Images.emptyPokeball}
      />
    ),
    [data],
  );

  /**
   * Renders a Pokemon information item.
   * @param title - The title of the information item.
   * @param value - The value of the information item.
   * @param unit - The unit of measurement for the value (optional).
   * @returns A JSX element representing the Pokemon information item.
   */
  const renderPokemonInfo = useCallback(
    ({ title, value, unit }: PokemonInfoItemProps) => (
      <PokemonInfoItem title={title} value={value} unit={unit} />
    ),
    [data],
  );

  return (
    <View style={Styles.container}>
      {renderPokemonPicture(data?.sprites?.other?.showdown?.front_default)}
      {renderPokemonInfo({ title: Strings['pokemon.name'], value: data?.name })}
      {renderPokemonInfo({
        title: Strings['pokemon.height'],
        value: convertHeight(data?.height),
        unit: "cm"
      })}
      {renderPokemonInfo({
        title: Strings['pokemon.weight'],
        value: convertWeight(data?.weight),
        unit: "kg"
      })}
      {renderPokemonInfo({
        title: Strings['pokemon.types'],
        value: formatTypes(data?.types),
      })}
    </View>
  );
};

export default PokemonDetailsScreen;
import React from 'react';
import { View, Text } from 'react-native';
import Styles from './styles';
import { PokemonInfoItemProps } from '../../interfaces/pokemon-info-item-props.interface';
import Strings from '../../constants/en.constants';

/**
 * Component for displaying a Pokemon information item.
 * @param {Object} props - The props object containing the title, value, and unit.
 * @param {string} props.title - The title of the information item.
 * @param {string | string[]} props.value - The value(s) of the information item.
 * @param {string} [props.unit] - The unit of measurement for the value.
 * @returns {JSX.Element} A View containing the Pokemon information item components.
 */
const PokemonInfoItem: React.FC<PokemonInfoItemProps> = ({ title, value, unit }) => {
  /**
   * Renders the value(s) of the information item.
   * @returns {JSX.Element | JSX.Element[]} The rendered value(s) as Text component(s).
   */
  const renderValue = () => {
    if (Array.isArray(value)) {
      return value.length > 0 ? (
        value.map((item, index) => (
          <Text key={index} style={Styles.value}>
            {item}
            {unit && ` ${unit}`}
          </Text>
        ))
      ) : (
        <Text style={Styles.value}>{Strings['pokemon.NA']}</Text>
      );
    }

    return (
      <Text style={Styles.value}>
        {value || Strings['pokemon.NA']}
        {unit && ` ${unit}`}
      </Text>
    );
  };

  return (
    <View style={Styles.itemContainer}>
      <View style={Styles.titleContainer}>
        <Text style={Styles.title}>{title}</Text>
      </View>
      <View style={Styles.valueContainer}>{renderValue()}</View>
    </View>
  );
};

export default PokemonInfoItem;
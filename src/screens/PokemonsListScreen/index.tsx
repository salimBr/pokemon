import React, {useCallback, useState, useEffect} from 'react';
import {
  FlatList,
  ListRenderItem,
  Text,
  View,
  ActivityIndicator,
  RefreshControl,
  VirtualizedList,
} from 'react-native';
import PokemonListItem from '../../components/PokemonListItem';
import Styles from './styles';
import NoDataItem from '../../components/NoDataItem';
import {Pokemon} from '../../interfaces/pokemon.interface';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../constants/routes.constants';
import {RootStackNavigationParams} from '../../navigation/RootNavigation';
import {useGetPokemonsQuery} from '../../services/pokeapi';
import {GET_POKEMONS_LIMIT} from '@env';
import PokemonListItemShimmer from '../../components/PokemonListItem/shimmer';
import {generateArrayOfNumbers} from '../../utils/actions.utils';

/**
 * PokemonListScreen component displays a list of Pokemon.
 */
const PokemonListScreen: React.FC = () => {
  const limit = Number(GET_POKEMONS_LIMIT);

  const [offset, setOffset] = useState(0);

  const {data, error, isLoading, refetch} = useGetPokemonsQuery({
    offset,
    limit,
  });

  const navigation = useNavigation<RootStackNavigationParams>();
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isFirstAppear, setIsFirstAppear] = useState(true);

  useEffect(() => {
    if (!data?.results) return;

    if (refreshing) {
      setPokemonList(data.results);
    } else {
      setPokemonList(prevList => [...prevList, ...data.results]);
    }

    setRefreshing(false);
    setIsFirstAppear(false)
  }, [data]);

  useEffect(() => {
    setRefreshing(false);
    setIsFirstAppear(false);
  }, [error]);

  /**
   * Renders a single item in the FlatList.
   * @param item - The item to render.
   * @param index - The index of the item.
   * @returns A JSX element representing the rendered item.
   */
  const renderItem: ListRenderItem<Pokemon | number> = useCallback(
    ({item, index}) => {
      if (typeof item === 'number') {
        return <PokemonListItemShimmer />;
      }
      return (
        <PokemonListItem
          id={index + 1}
          name={item.name}
          onItemClick={() =>
            navigation.navigate(Routes.PokemonDetailsScreen, {
              title: item.name,
              id: index + 1,
            })
          }
        />
      );
    },
    [],
  );

  /**
   * Renders the empty component when there's no data to display.
   * @returns A JSX element representing the empty component.
   */
  const renderEmptyComponent = () => {
    if (isLoading) return null;

    <NoDataItem onClick={() => refetch()} />;
  };

  /**
   * Renders the footer component when loading more data.
   * @returns A JSX element representing the footer component.
   */
  const renderFooter = () => {
    if (!isLoading) return null;
    return <ActivityIndicator style={{margin: 10}} />;
  };

  /**
   * Handles loading more data when reaching the end of the list.
   */
  const handleLoadMore = () => {
    if (!isLoading && !refreshing && pokemonList?.length) {
      setOffset(prevOffset => prevOffset + limit);
    }
  };

  /**
   * Handles refreshing the list when pulled down.
   */
  const handleRefresh = () => {
    setRefreshing(true);
    setOffset(0);
    refetch();
  };

  /**
   * Returns the item at the specified index in the data array.
   * @param data - The array of Pokemon data.
   * @param index - The index of the item to retrieve.
   * @returns The Pokemon item at the specified index.
   */
  const getItem = useCallback(
    (data: Pokemon[], index: number) => data[index],
    [],
  );

  /**
   * Returns the total number of items in the data array.
   * @param data - The array of Pokemon data.
   * @returns The total number of Pokemon items.
   */
  const getItemCount = useCallback((data: Pokemon[]) => data.length, []);

  /**
   * Generates keys for items in the data array.
   * @param item - The Pokemon item.
   * @param index - The index of the item.
   * @returns A string representing the unique key for the item.
   */
  const keyExtractor = useCallback(
    (item: Pokemon, index: any) => `${index}`,
    [],
  );

  const arrayForLoader = useCallback(() => generateArrayOfNumbers(12), []);

  const dataForList = useCallback(() => (isLoading || isFirstAppear) && !pokemonList?.length ? arrayForLoader() : pokemonList, [pokemonList, isFirstAppear, isLoading]);


  return (
    <View style={Styles.container}>
      <VirtualizedList
        data={dataForList()}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyComponent}
        ListFooterComponent={renderFooter}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.3}
        removeClippedSubviews={true}
        keyExtractor={keyExtractor}
        getItem={getItem}
        getItemCount={getItemCount}
        initialNumToRender={20}
        maxToRenderPerBatch={20}
        windowSize={12}
        updateCellsBatchingPeriod={100}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};

export default PokemonListScreen;

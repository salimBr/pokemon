import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonListScreen from '../screens/PokemonsListScreen';
import PokemonDetailsScreen from '../screens/PokemonDetailsScreen';
import Routes from '../constants/routes.constants';
import Strings from '../constants/en.constants';
import colors from '../constants/colors.constants';
import { capitalize } from '../utils/strings.utils';
import { RootStackParams } from '../types/routes';
import { normalizeSize } from '../utils/normalize.utils';

// Create a stack navigator with specified screen parameters.
const Stack = createNativeStackNavigator<RootStackParams>();

/**
 * Type definition for the navigation parameters of the root stack.
 */
export type RootStackNavigationParams = NativeStackNavigationProp<RootStackParams>;

/**
 * Root navigation component responsible for managing the navigation flow of the application.
 */
const RootNavigation: React.FC = () => {
  
  return (
    <NavigationContainer>
      {/* Define the stack navigator with initial route */}
      <Stack.Navigator initialRouteName={Routes.PokemonListScreen}>
        {/* PokemonListScreen */}
        <Stack.Screen
          name={Routes.PokemonListScreen}
          component={PokemonListScreen}
          options={{
            title: Strings['header.title.list'], /**< Title of the screen */
            headerTintColor: 'white', /**< Color of the header text */
            headerBackTitleVisible: false, /**< Visibility of back button text */
            headerStyle: {
                backgroundColor : colors.blue /**< Background color of the header */
            },
            headerTitleStyle: {
                color : colors.white, /**< Color of the header title */
                fontSize : normalizeSize(22), /**< Font size of the header title */
                fontWeight : "700" /**< Font weight of the header title */
            }
        }}
        />
        {/* PokemonDetailsScreen */}
        <Stack.Screen
          name={Routes.PokemonDetailsScreen}
          component={PokemonDetailsScreen}
          options={({ route }) => ({
            title: capitalize(route?.params?.title), /**< Title of the screen, capitalized */
            headerTintColor: 'white', /**< Color of the header text */
            headerBackTitleVisible: false, /**< Visibility of back button text */
            headerStyle: {
                backgroundColor : colors.blue /**< Background color of the header */
            },
            headerTitleStyle: {
                color : colors.white, /**< Color of the header title */
                fontSize : normalizeSize(22), /**< Font size of the header title */
                fontWeight : "800" /**< Font weight of the header title */
            }
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
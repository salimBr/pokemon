import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { pokemonApi } from '../services/pokeapi';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [pokemonApi.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
}));

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(pokemonApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

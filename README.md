# Pokemon React native app


## Setup

- clone the repository or copy the content of pokemon directory into «your directory»
- cd «your directory»
- npm i --legacy-peer-deps
- npx pod-install

## Environment variables

Add your application configuration to your .env file in the root of the project:

```
BASE_URL=https://pokeapi.co/api/v2/
GET_POKEMONS_LIMIT=20
```
Alternatively, copy variables from .env.example:

```
cp .env.example .env
```
## Check configuration

Before you start, please check missing configuration by running

  ```
  npm run doctor
  ```

## Start Metro Bundler

  ```
  npm start
  ```

## Running on iOS

  ```
  npm run ios
  ```

## Running on Android

  ```
  npm run android
  ```


## Running unit tests

  ```
  npm run test
  ```

## Project documentation

  ```
  npm run doc

  ```

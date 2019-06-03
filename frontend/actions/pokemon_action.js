import * as APIUtil from '../util/api_util';
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const START_LOADING_ALL_POKEMON = 'START_LOADING_ALL_POKEMON';


export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const startLoadingAllPokemon = () => ({
  type: START_LOADING_ALL_POKEMON
});

export const requestAllPokemon = () => (dispatch) => {
  dispatch(startLoadingAllPokemon());
  return APIUtil.fetchAllPokemon().then(pokemon => {dispatch(receiveAllPokemon(pokemon))});
}

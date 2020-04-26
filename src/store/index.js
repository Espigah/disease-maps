import { createStore } from 'redux';
import { Reducers } from './reducers';
export const Store = createStore(Reducers);

Store.subscribe( () => {
    console.log('state\n', Store.getState());
  });
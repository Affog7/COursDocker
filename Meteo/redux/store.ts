// store.js

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import appReducer from './reducers/appReducer';
import FavoritesReducer from './reducers/FavoritesReducer';
import IconsReducer from './reducers/IconReducer';

// Reference here all your application reducers
const reducer = {
  appReducer: appReducer,
  IconsReducer: IconsReducer,
  FavoritesReducer: FavoritesReducer,
};

// @ts-ignore
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
},);

export default store;

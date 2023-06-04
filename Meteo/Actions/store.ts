import {configureStore} from '@reduxjs/toolkit'
import appReducer from './reducer';

// Reference here all your application reducers
const reducer = {
  appReducer: appReducer,
}

// @ts-ignore
const store = configureStore({
  reducer,
  /*middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })*/
},);

export default store;
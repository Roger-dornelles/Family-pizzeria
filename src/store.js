import { createStore, } from "redux";
import {persistStore,persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

//reducers
import reducers from './reducers';

const persistConfig = {
    key:'root',
    storage,
    whiteList:['products']
};

const pReducer = persistReducer(persistConfig,reducers);
const store = createStore(pReducer);
const persistor = persistStore(store);

export {store, persistor};
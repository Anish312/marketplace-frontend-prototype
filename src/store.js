import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";



import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { userReducer } from "./reducers/userReducer";
import { marketplaceDetailsReducer, marketplacesReducer } from "./reducers/marketplaceReducer";
import { mpUserReducer } from "./reducers/mpUserReducer";


const middleware = [thunk];


const reducer = combineReducers({
    user: userReducer,
    marketplaces: marketplacesReducer,
    marketplaceDetails : marketplaceDetailsReducer,
    marketplaceUser : mpUserReducer
  });

  let initialState = {};

  const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))

  // composeSetup(applyMiddleware(...middleware))
);

export default store; 
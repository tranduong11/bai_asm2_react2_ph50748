import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { distributorReducer } from '../reducers/distributorReducer';

const rootReducer = combineReducers({
  distributors: distributorReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';

// Combine multiple reducers if needed
const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here
});

const store = createStore(rootReducer);

export default store;
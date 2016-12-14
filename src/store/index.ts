import {applyMiddleware, createStore} from 'redux';
import * as createLogger from 'redux-logger';
import rootReducer from '../reducers';

// Create a global store
const store = createStore(
    rootReducer,
    applyMiddleware(
        createLogger()
    )
);

export default store;
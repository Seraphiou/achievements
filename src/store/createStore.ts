import { createStore } from 'redux';
import rootReducer from '../reducers';

enum Page {
    HOME = 0,
    // ...
    QUESTIONS
}

interface IState {
    activePage : Page;
}

export default () => createStore(rootReducer);

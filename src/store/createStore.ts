import {createStore} from 'redux';
import rootReducer from '../reducers';

export enum Page {
    HOME = 0,
    QUESTIONS
}

export class ApplicationState {
    public constructor(public activePage: Page) {
    }
}

export default () => createStore(rootReducer);

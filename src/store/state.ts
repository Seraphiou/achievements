import {PageIndex} from '../actions';

/**
 *
 */
export default class State {
    public constructor(public activePage: PageIndex) {
    }
}

// Initial state
export const initialState = new State(PageIndex.HomePage);
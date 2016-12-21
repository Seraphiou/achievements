import {firstSlide} from "../actions/slides";

/**
 * Application state
 */
export function State(activePage) {
    this.activePage = activePage;
}

// Initial state
export const initialState = new State(firstSlide);
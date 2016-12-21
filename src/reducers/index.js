import {GO_NEXT_SLIDE_ACTION, GO_PREV_SLIDE_ACTION, GO_PAGE_ACTION} from "../actions";
import {firstSlide, lastSlide} from "../actions/slides";
import {State, initialState} from '../store/state';

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GO_NEXT_SLIDE_ACTION:
            return (state.activePage < lastSlide) ? new State(state.activePage + 1) : state;

        case GO_PREV_SLIDE_ACTION:
            return (state.activePage > firstSlide) ? new State(state.activePage - 1) : state;

        case GO_PAGE_ACTION:
            return new State(action.payload);
    }

    return state;
}
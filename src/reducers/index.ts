import * as actions from '../actions';
import {Action} from "../actions";
import {Page, ApplicationState} from "../store/page";

const initialState = new ApplicationState(Page.HOME);

export default function reducer(state = initialState, action: Action) {
    switch (action.type) {
        case actions.GO_HOME:
            return new ApplicationState(Page.HOME);

        case actions.GO_QUESTION:
            return new ApplicationState(Page.QUESTIONS);

        case actions.GO_NEXT:

            return new ApplicationState(state.activePage + 1);

        case actions.GO_PREVIOUS:
            return new ApplicationState(state.activePage - 1);
    }

    return state;
}
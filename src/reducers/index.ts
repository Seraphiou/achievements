import {Page, ApplicationState} from "../store/createStore";
import * as actions from '../actions';

interface Action {
    type: string;
    payload: any;
}

const initialState = new ApplicationState(Page.HOME);

export default function reducer(state = initialState, action: Action) {
    switch (action.type) {
        case actions.GO_HOME:
            return new ApplicationState(Page.HOME);

        case actions.GO_QUESTION:
            return new ApplicationState(Page.QUESTIONS);

        case actions.GO_NEXT:
            return;

        case actions.GO_PREVIOUS:
            return;
    }

    return state;
}
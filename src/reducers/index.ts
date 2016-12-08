import {IAction, ActionTypes, PageIndex} from "../actions";
import {initialState} from '../store/state';
import State from '../store/state';

export default function rootReducer(state: State = initialState, action: IAction): State {
    switch (action.type) {
        case ActionTypes.GO_NEXT_SLIDE_ACTION:
            return (state.activePage < PageIndex.QuestionPage) ? new State(state.activePage + 1) : state;

        case ActionTypes.GO_PREV_SLIDE_ACTION:
            return (state.activePage > PageIndex.HomePage) ? new State(state.activePage - 1) : state;

        case ActionTypes.GO_HOME_ACTION:
        case ActionTypes.GO_QUESTION_ACTION:
            return new State(action.payload);
    }

    return state;
}
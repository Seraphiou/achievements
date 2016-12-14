/**
 * Redux action interface
 */
export interface IAction {
    type: string;
    payload?: any;
}

const createAction = (type: string, payload?: any) => ({type, payload});

// Page indexes, starting from 0
export enum PageIndex {
    HomePage = 0,
    QuestionPage
}

// Action names
export const ActionTypes = {
    // Navigation actions
    GO_NEXT_SLIDE_ACTION: 'GO_NEXT_SLIDE_ACTION',
    GO_PREV_SLIDE_ACTION: 'GO_PREV_SLIDE_ACTION',

    // Pages actions
    GO_HOME_ACTION: 'GO_HOME_ACTION',
    GO_QUESTION_ACTION: 'GO_QUESTION_ACTION',
};

// List of all actions
export const goNextSlideAction = createAction(ActionTypes.GO_NEXT_SLIDE_ACTION);
export const goPrevSlideAction = createAction(ActionTypes.GO_PREV_SLIDE_ACTION);
export const goHomeAction = createAction(ActionTypes.GO_HOME_ACTION, PageIndex.HomePage);
export const goQuestionAction = createAction(ActionTypes.GO_QUESTION_ACTION, PageIndex.QuestionPage);
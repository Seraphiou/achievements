import {PAGES} from "./slides";

const createAction = (type, name, payload) => ({type, name, payload});


// Action names
export const GO_NEXT_SLIDE_ACTION = 'GO_NEXT_SLIDE_ACTION';
export const GO_PREV_SLIDE_ACTION = 'GO_PREV_SLIDE_ACTION';
export const GO_PAGE_ACTION = 'GO_PAGE_ACTION';

// List of all actions
export const goNextSlideAction = createAction(GO_NEXT_SLIDE_ACTION);
export const goPrevSlideAction = createAction(GO_PREV_SLIDE_ACTION);
export const goPageActions = PAGES.map((page, index) => createAction(GO_PAGE_ACTION, page, index));
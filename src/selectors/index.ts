import { createSelector } from 'reselect';
import State from "../store/state";
import {PageIndex} from '../actions/index';

// Extract active page from state
export const getActivePage = (state: State) => state.activePage;

// Calculate offset
export const getOffsetTop = createSelector(getActivePage, (activePage) => `-${activePage * 100}vh`);

// Navigation activation
export const isPrevActive = createSelector(getActivePage, (activePage) => activePage > PageIndex.HomePage);
export const isNextActive = createSelector(getActivePage, (activePage) => activePage < PageIndex.QuestionPage);

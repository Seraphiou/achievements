import {createSelector} from 'reselect';
import {firstSlide, lastSlide} from "../actions/slides";

// Extract active page from state
export const getActivePage = (state) => state.activePage;

// Calculate offset
export const getOffsetTop = createSelector(getActivePage, (activePage) => `-${activePage * 100}vh`);

// Navigation activation
export const isPrevActive = createSelector(getActivePage, (activePage) => activePage > firstSlide);
export const isNextActive = createSelector(getActivePage, (activePage) => activePage < lastSlide);

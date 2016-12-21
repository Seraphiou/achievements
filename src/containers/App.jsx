import * as React from 'react';
import AffixBar from '../components/AffixBar';
import Navigation from '../components/Navigation';
import ViewPort from '../components/ViewPort';
import store from '../store/index';

const DOWN_KEY = 40;
const DOWN_UP = 38;
// Keynote
import './App.scss';
import {goNextSlideAction, goPrevSlideAction} from "../actions/index";

document.addEventListener('keyup', (e) => {
    switch (e.keyCode) {
        case DOWN_KEY:
            store.dispatch(goNextSlideAction);
            break;
        case DOWN_UP:
            store.dispatch(goPrevSlideAction);
            break;
        default:
            break;
    }
});

const App = () => (
    <div className="keynote">
        <ViewPort/>
        <AffixBar/>
        <Navigation/>
    </div>
);
export default App;

import * as React from 'react';

import AffixBar from '../components/AffixBar';
import Navigation from '../components/Navigation';
import ViewPort from '../components/ViewPort';

import './App.scss';

const App = () => (
    <div className="keynote">
        <ViewPort/>
        <AffixBar/>
        <Navigation/>
    </div>
);

export default App;

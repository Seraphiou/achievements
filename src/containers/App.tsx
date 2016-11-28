import * as React from 'react';
import { ReactNode, StatelessComponent } from 'react';
import './App.scss';

import AffixBar from '../components/AffixBar';
import Navigation from '../components/Navigation';
import ViewPort from '../components/ViewPort';

// Keynote
interface IApp {
    children?: ReactNode;
}

const App: StatelessComponent<IApp> = () => (
    <div className='keynote'>
        <ViewPort/>
        <AffixBar/>
        <Navigation/>
    </div>
);

export default App;

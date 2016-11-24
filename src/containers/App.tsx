import * as React from 'react';
import { StatelessComponent } from 'react';

interface IApp {
  name: string;
}

const App: StatelessComponent<IApp> = ({name}) => (
    <h1>{name}</h1>
);

export default App;

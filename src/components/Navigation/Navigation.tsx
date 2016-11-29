import * as React from 'react';
import { StatelessComponent } from 'react';
import './Navigation.scss';

import Button from '../Button';

interface INavigation {
}

const Navigation: StatelessComponent<INavigation> = (props) => (
    <div className='navigation'>
        <Button action='NextPage' icon='next'/>
        <Button action='PreviousPage' icon='previous' />
    </div>
);

export default Navigation;

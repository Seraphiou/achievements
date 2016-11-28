import * as React from 'react';
import { StatelessComponent } from 'react';
import './Navigation.scss';

import Button from '../Button';

interface INavigation {
}

const Navigation: StatelessComponent<INavigation> = (props) => (
    <div className='navigation'>
        <Button action='NEXT_PAGE' icon='next_icone' class='next'/>
        <Button action='PREVIOUS_PAGE' icon='previsou_icone' class='previous'/>
    </div>
);

export default Navigation;

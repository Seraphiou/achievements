import * as React from 'react';
import {StatelessComponent} from 'react';

import {goNextSlideAction, goPrevSlideAction} from '../../actions';
import Button from '../Button';

interface INavigation {
    isPrevActive: boolean;
    isNextActive: boolean;
}

const Navigation: StatelessComponent<INavigation> = ({isPrevActive, isNextActive}) => (
    <div className='navigation'>
        {isPrevActive && <Button action={goPrevSlideAction}/>}
        {isNextActive && <Button action={goNextSlideAction}/>}
    </div>
);

export default Navigation;

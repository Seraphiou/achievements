import * as React from 'react';
import {StatelessComponent} from 'react';
import {goHomeAction, goQuestionAction, PageIndex} from '../../actions';
import Button from '../Button';

const NAV_ITEMS = [
    {page: PageIndex.HomePage, action: goHomeAction},
    {page: PageIndex.QuestionPage, action: goQuestionAction}
];

interface IAffixBar {
    activePage: PageIndex;
}

const AffixBar: StatelessComponent<IAffixBar> = ({activePage}) => {
    const buttons = NAV_ITEMS.map((i) => <Button action={i.action} isActive={activePage === i.page}/>);

    return (
        <div className='affix-bar'>
            <nav>{buttons}</nav>
        </div>
    );
};

export default AffixBar;

// <Button action={goHomeAction} isActive={true}/>
// <Button action={goQuestionAction}/>

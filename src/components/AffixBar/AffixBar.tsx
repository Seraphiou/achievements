import * as React from 'react';
import {StatelessComponent} from 'react';
import Button from '../Button/Button';

interface IAffixBar {
    activePage;
}

// TODO manage is active
const AffixBar: StatelessComponent<IAffixBar> = ({activePage}) => (
    <div className='affix-bar'>
        <nav>
            <Button action='GoHomePage' icon='home' active={activePage === 0}/>
            <Button action='GoQuestionPage' icon='question' active={activePage === 1}/>
        </nav>
    </div>
);

export default AffixBar;

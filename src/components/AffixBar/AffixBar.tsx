import * as React from 'react';
import {StatelessComponent} from 'react';

import Button from '../Button';

interface IAffixBar {
}

// TODO manage is active

const AffixBar: StatelessComponent<IAffixBar> = (props) => (
    <div className='affix-bar'>
        <nav>
            <Button action='GoHomePage' icon='home' />
            <Button action='GoQuestionPage' icon='question' />
        </nav>
    </div>
);

export default AffixBar;

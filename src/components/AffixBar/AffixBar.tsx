import * as React from 'react';
import {StatelessComponent} from 'react';

interface IAffixBar {
}

const AffixBar: StatelessComponent<IAffixBar> = (props) => (
    <div className='affix-bar'>
        <div className='navs'>
            <div className='button active'><i className='home'/></div>
            <div className='button'><i className='question'/></div>
        </div>
    </div>
);

export default AffixBar;

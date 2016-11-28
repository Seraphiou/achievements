import * as React from 'react';
import { StatelessComponent } from 'react';

interface IAffixBar {
}

const AffixBar: StatelessComponent<IAffixBar> = (props) => (
    <div className='affix-bar'>AffixBar</div>
);

export default AffixBar;

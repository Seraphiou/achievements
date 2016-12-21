import * as React from 'react';
import Button from '../Button';
import {goPageActions} from '../../actions';

const AffixBar = ({activePage}) => {
    const buttons = goPageActions.map(goPageAction => (
        <Button key={goPageAction.payload} action={goPageAction} isActive={activePage === goPageAction.payload}/>
    ));

    return (
        <div className="affix-bar">
            <nav>{buttons}</nav>
        </div>
    );
};

AffixBar.propTypes = {
    activePage: React.PropTypes.number.isRequired,
};

export default AffixBar;

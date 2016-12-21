import * as React from 'react';

import {goNextSlideAction, goPrevSlideAction} from '../../actions';
import Button from '../Button';

const Navigation = ({isPrevActive, isNextActive}) => (
    <div className="navigation">
        {isPrevActive && <Button action={goPrevSlideAction}/>}
        {isNextActive && <Button action={goNextSlideAction}/>}
    </div>
);

Navigation.propTypes = {
    isPrevActive: React.PropTypes.bool.isRequired,
    isNextActive: React.PropTypes.bool.isRequired
};

export default Navigation;

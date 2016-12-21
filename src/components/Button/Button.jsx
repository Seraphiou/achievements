import * as React from 'react';

const Button = ({action, isActive, dispatchAction}) => {
    const {type, name} = action;
    const fullClassName = `button button-${type}${name ? '_' + name : ''} ${isActive ? 'active' : ''}`;

    return (
        <button className={fullClassName} onClick={dispatchAction}/>
    );
};

Button.propTypes = {
    action: React.PropTypes.object.isRequired,
    isActive: React.PropTypes.bool,
    dispatchAction: React.PropTypes.func.isRequired
};

export default Button;

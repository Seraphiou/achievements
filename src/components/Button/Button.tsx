import * as React from 'react';
import {StatelessComponent} from 'react';
import {IAction} from '../../actions';

interface IButton {
    action: IAction;
    isActive: boolean;
    dispatchAction: any;
}

const Button: StatelessComponent<IButton> = ({action, isActive, dispatchAction})  => {
    const fullClassName = `button button-${action.type} ${isActive ? 'active' : ''}`;

    return (
        <button className={fullClassName} onClick={dispatchAction}/>
    );
};

export default Button;

import * as React from 'react';
import {StatelessComponent} from 'react';

export enum ButtonIcon {
    HOME,
    QUESTION,
    PREVIOUS,
    NEXT
}

interface IButton {
    action: string;
    icon: string;
    active: boolean;
}

const Button: StatelessComponent<IButton> = ({action, icon, active}) => {
    const isActive = active ? 'active' : '';
    const fullClassName = `button button-${icon} ${isActive}`;

    return (
        <button className={fullClassName} />
    );
};

export default Button;

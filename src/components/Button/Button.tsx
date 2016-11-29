import * as React from 'react';
import {StatelessComponent} from 'react';

enum ButtonIcon {
    HOME,
    QUESTION,
    PREVIOUS,
    NEXT
}

interface IButton {
    action: string;
    icon: ButtonIcon;
    className: string;
}

const Button: StatelessComponent<IButton> = ({action, icon, className}) => {
    const fullClassName = `button button-${icon} ${className}`;

    return (
        <button className={fullClassName} />
    );
};

export default Button;

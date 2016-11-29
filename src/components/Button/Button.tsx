import * as React from 'react';
import { StatelessComponent } from 'react';

interface IButton {
    class: string;
    action: string;
    icon: string;
}

const Button: StatelessComponent<IButton> = (props) => (
    <button className={props.class} />
);

export default Button;

import * as React from 'react';
import { StatelessComponent } from 'react';

interface IButton {
    action: string;
    icon: string;
}

const Button: StatelessComponent<IButton> = (props) => (
    <button>Button</button>
);



export default Button;

import * as React from 'react';
import {ReactNode, StatelessComponent} from 'react';
import './Slide.scss';

interface ISlide {
    children?: ReactNode;
}

const Slide: StatelessComponent<ISlide> = ({children}) => (
    <div className='achievement-slide'>{children}</div>
);

export default Slide;

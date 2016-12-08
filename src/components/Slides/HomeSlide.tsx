import * as React from 'react';
import {StatelessComponent} from 'react';
import Slide from './Slide';

interface IHomeSlide {
}

const HomeSlide: StatelessComponent<IHomeSlide> = (props) => (
    <Slide>
        <h1>Welcome to our Achievements</h1>
    </Slide>
);

export default HomeSlide;

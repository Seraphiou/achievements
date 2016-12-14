import * as React from 'react';
import {StatelessComponent} from 'react';
import Slide from './Slide';

interface IQuestionSlide {
}

const QuestionSlide: StatelessComponent<IQuestionSlide> = (props) => (
    <Slide>
        <h1>De You Have Any Question ?</h1>
    </Slide>
);

export default QuestionSlide;

import * as React from 'react';
import {StatelessComponent} from 'react';

// Import pages
import HomeSlide from '../Slides/HomeSlide';
import QuestionSlide from '../Slides/QuestionSlide';

interface IViewPort {
    offsetTop: string;
}

const ViewPort: StatelessComponent<IViewPort> = ({offsetTop}) => (
    <div className='view-port'>
        <div className='slides' style={{top: offsetTop}}>
            <HomeSlide />
            <QuestionSlide />
        </div>
    </div>
);

export default ViewPort;

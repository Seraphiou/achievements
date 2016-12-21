import * as React from 'react';

// Import pages
import HomeSlide from '../Slides/01.Home';
import MenuSlide from '../Slides/02.Menu';
import QuestionSlide from '../Slides/03.Question';

const ViewPort = ({offsetTop}) => (
    <div className="view-port">
        <div className="slides" style={{top: offsetTop}}>
            <HomeSlide />
            <MenuSlide />
            <QuestionSlide />
        </div>
    </div>
);

ViewPort.propTypes = {
    offsetTop: React.PropTypes.string.isRequired
};

export default ViewPort;

import * as React from 'react';
import './Slide.scss';

const Slide = ({children}) => (
    <div className="achievement-slide">{children}</div>
);

Slide.propTypes = {
    children: React.PropTypes.element.isRequired
};

export default Slide;

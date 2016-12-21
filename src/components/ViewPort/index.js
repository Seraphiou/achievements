import {connect} from 'react-redux';

import ViewPort from './ViewPort';
import {getOffsetTop} from "../../selectors";

import './ViewPort.scss';

const mapStateToProps = (state) => ({
    offsetTop: getOffsetTop(state)
});

export default connect(mapStateToProps)(ViewPort);

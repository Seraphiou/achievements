import {connect} from 'react-redux'

import ViewPort from './ViewPort';
import State from "../../store/state";
import {getOffsetTop} from "../../selectors";
import './ViewPort.scss';

const mapStateToProps = (state: State) => ({
    offsetTop: getOffsetTop(state)
});

export default connect(mapStateToProps)(ViewPort);

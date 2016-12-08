import {connect} from 'react-redux'

import Navigation from './Navigation';
import './Navigation.scss';
import State from '../../store/state';
import {isPrevActive, isNextActive} from '../../selectors';

const mapStateToProps = (state: State) => ({
    isPrevActive: isPrevActive(state),
    isNextActive: isNextActive(state)
});

export default connect(mapStateToProps)(Navigation);
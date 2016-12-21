import {connect} from 'react-redux';

import Navigation from './Navigation';
import {isPrevActive, isNextActive} from '../../selectors';

import './Navigation.scss';

const mapStateToProps = (state) => ({
    isPrevActive: isPrevActive(state),
    isNextActive: isNextActive(state)
});

export default connect(mapStateToProps)(Navigation);
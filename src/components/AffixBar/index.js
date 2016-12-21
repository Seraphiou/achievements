import {connect} from 'react-redux';

import AffixBar from './AffixBar';
import {getActivePage} from "../../selectors";

import './AffixBar.scss';

const mapStateToProps = (state) => ({
    activePage: getActivePage(state)
});

export default connect(mapStateToProps)(AffixBar);
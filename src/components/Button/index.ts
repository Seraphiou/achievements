import {connect} from 'react-redux'

import Button from './Button';
import './Button.scss';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        //onClick: () => {
        //    dispatch(setVisibilityFilter(ownProps.filter))
        //}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);

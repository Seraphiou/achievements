import {connect} from 'react-redux';

import Button from './Button';
import './Button.scss';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatchAction: () => dispatch(ownProps.action)
    };
};

export default connect(null, mapDispatchToProps)(Button);

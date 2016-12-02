import AffixBar from './AffixBar';
import { connect } from 'react-redux';
import './AffixBar.scss';
import {ApplicationState} from "../../store/page";



export const mapStateToProps = (state : ApplicationState) => {
    return {
        activePage : state.activePage
    }
};
export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        //onClick: () => {
        //    dispatch(setVisibilityFilter(ownProps.filter))
        //}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AffixBar);
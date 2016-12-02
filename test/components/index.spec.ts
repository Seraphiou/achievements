import { expect } from 'chai';
import {Page, ApplicationState} from "../../src/store/page";
import {mapStateToProps} from "../../src/components/AffixBar/index";

describe('map state to props', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('should go home when actions go home', () => {
        var state = new ApplicationState(Page.HOME);
        var props = mapStateToProps(state);
        expect(props.activePage).to.deep.equal(Page.HOME);
    });

});
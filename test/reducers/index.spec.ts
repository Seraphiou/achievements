import reducer from '../../src/reducers';
import { expect } from 'chai';
import {GoHomeAction, GoQuestionAction, GoNextAction, GoPreviousAction} from "../../src/actions";
import {Page, ApplicationState} from "../../src/store/page";

describe('Reducer', () => {
  beforeEach(() => {});

  afterEach(() => {});

  it('should go home when actions go home', () => {
    var state = new ApplicationState(Page.HOME);
    var newState = reducer(state, new GoHomeAction());
    expect(newState).to.deep.equal(new ApplicationState(Page.HOME));
  });
  it('should go question when action go question', () => {
    var state = new ApplicationState(Page.QUESTIONS);
    var newState = reducer(state, new GoQuestionAction());
    expect(newState).to.deep.equal(new ApplicationState(Page.QUESTIONS));
  });
  it('should go question when state is home and action is go next', () => {
    var state = new ApplicationState(Page.HOME);
    var newState = reducer(state, new GoNextAction());
    expect(newState).to.deep.equal(new ApplicationState(Page.QUESTIONS));
  });
  it('should go home when state is question and action is go previous', () => {
    //Given
    var state = new ApplicationState(Page.QUESTIONS);

    //When
    var newState = reducer(state, new GoPreviousAction());

    //Then
    expect(newState).to.deep.equal(new ApplicationState(Page.HOME));
  });

  xit('should stay question when state is question and action is go next', () => {
    var state = new ApplicationState(Page.QUESTIONS);
    var newState = reducer(state, new GoNextAction());
    expect(newState).to.deep.equal(new ApplicationState(Page.QUESTIONS));
  });
});
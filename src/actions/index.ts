export const GO_NEXT = 'goNext';
export const GO_PREVIOUS = 'goPrevious';
export const GO_HOME = 'goHome';
export const GO_QUESTION = 'goQuestion';

export abstract class Action {
    constructor(public type: string){
}
}
export class GoHomeAction extends Action {
    constructor(){
        super(GO_HOME)
    }
}
export class GoQuestionAction extends Action {
    constructor(){
        super(GO_QUESTION)
    }
}
export class GoNextAction extends Action {
    constructor(){
        super(GO_NEXT)
    }
}
export class GoPreviousAction extends Action {
    constructor(){
        super(GO_PREVIOUS)
    }
}


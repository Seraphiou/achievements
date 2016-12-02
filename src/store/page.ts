export enum Page {
    HOME = 0,
    QUESTIONS
}
export class ApplicationState {
    public constructor(public activePage: Page) {
    }
}
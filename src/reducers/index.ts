export default function reducer(state = "Seraphin", action: {type: string, payload: any}) {
    if (action.type === 'ChangeUser') {
        return "Abdelhakim";
    }
    return state;
}
import { Alert_ERROR, Clear_ERROR } from "../actiontype/ErrorActionType";

const initialState = []

const ErrorReducer= (state = initialState, { type, payload }) => {
 switch (type) {
    case Alert_ERROR:
        return [...state,payload]
    case Clear_ERROR:
        return state.filter((el) => el.id !== payload);
    default:
        return state;
 }
}
export default ErrorReducer

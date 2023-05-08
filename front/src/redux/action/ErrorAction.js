import { Alert_ERROR, Clear_ERROR } from "../actiontype/ErrorActionType";

export const alert_error = (msg) => async (dispatch) => {
    const id = Math.random();
    dispatch({ type: Alert_ERROR, payload: { msg, id } });
    setTimeout(() => {
      dispatch({ type: Clear_ERROR, payload: id });
    }, 5000);
  };
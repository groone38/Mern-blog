// import axios from "axios";
import axios from "../../../../service/axios";
import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "../../rootReducer";
import { AuthActionTypes } from "../actionTypes";

export const authUser = (
  value: any
): ThunkAction<void, RootState, void, AnyAction> => {
  return async (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
    dispatch({type: AuthActionTypes.LOADING})
    try {
      const { data } = await axios.post(
        "/auth/login",
        value
      );
      if(data.token) {
        window.localStorage.setItem('token', data.token)
      }
      dispatch({type: AuthActionTypes.LOGIN, payload: {user: data.user, token: data.token}})
      dispatch({type: AuthActionTypes.STATUS, payload: data.message})
    } catch (error) {
      dispatch({type: AuthActionTypes.STATUS, payload: error.response.data.message})
    }
    dispatch({type: AuthActionTypes.LOADING})
  };
};

export const registrUser = (
  value: any
): ThunkAction<void, RootState, void, AnyAction> => {
  return async (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
    dispatch({type: AuthActionTypes.LOADING})
    console.log(value);
    try {
      const { data } = await axios.post(
        "/auth/registration",
        value, {headers: {
          'Content-Type': 'multipart/form-data'
        }}
        );
        if(data.token) {
          window.localStorage.setItem('token', data.token)
        }
        dispatch({type: AuthActionTypes.REGISTRATION, payload: {user: data.user, token: data.token}})
        dispatch({type: AuthActionTypes.STATUS, payload: data.message})
      } catch (error) {
        dispatch({type: AuthActionTypes.STATUS, payload: error.response.data.message})
      }
    dispatch({type: AuthActionTypes.LOADING})
  };
};

export const getMy = (): ThunkAction<void, RootState, void, AnyAction> => {
  return async (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
    dispatch({type: AuthActionTypes.LOADING})
    try {
      const { data } = await axios.get("/auth/user");
      dispatch({type: AuthActionTypes.LOGIN, payload: {user: data.user, token: data.token}})
      // dispatch({type: AuthActionTypes.STATUS, payload: data.message})
    } catch (error) {
      // dispatch({type: AuthActionTypes.STATUS, payload: error.response.data.message})
    }
    dispatch({type: AuthActionTypes.LOADING})
  };
};
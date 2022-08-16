import { AuthActionTypes } from "../../redux/action/actionTypes"


export interface AuthState {
    user: {
        _id: string,
		username: string,
		password: string,
		roles: [],
		company: string,
		number: string,
		about: string,
		post: [],
        image: string,
        city: string,
        famous: string
    }
    token: string
    isLoading: boolean
    status: string
}

interface LoginAction {
    type: AuthActionTypes.LOGIN,
    payload: AuthState
}

interface RegistrAction {
    type: AuthActionTypes.REGISTRATION,
    payload: AuthState
}

interface LogoutAction {
    type: AuthActionTypes.LOGOUT
}

interface LoadingAction {
    type: AuthActionTypes.LOADING
    payload: any
}

interface StatusAction {
    type: AuthActionTypes.STATUS
    payload: string
}

export type AuthAction = LoginAction | LogoutAction | RegistrAction | LoadingAction | StatusAction
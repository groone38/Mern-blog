import { AuthAction, AuthState } from "../../../types/auth/Auth"
import { AuthActionTypes } from "../../action/actionTypes"


const initialState: AuthState = {
    user: {
        _id: '',
        about: '',
        company: '',
        number: '',
        password: '',
        post: [],
        roles: [],
        username: '',
        image: '',
        city: '',
        famous: ''
    },
    token: '',
    isLoading: false,
    status: ''
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch(action.type) {
        case AuthActionTypes.LOGIN: 
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        case AuthActionTypes.LOGOUT:
            return {
                ...state,
                user: {
                    _id: '',
                    about: '',
                    company: '',
                    number: '',
                    password: '',
                    post: [],
                    roles: [],
                    username: '',
                    image: '',
                    city: '',
                    famous: ''
                },
                token: '',
            }
        case AuthActionTypes.REGISTRATION:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
            }
        case AuthActionTypes.LOADING:
            return {
                ...state,
                isLoading: !state.isLoading
            }
        case AuthActionTypes.STATUS:
            return {
                ...state,
                status: action.payload
            }
        default:
            return state
    }
}
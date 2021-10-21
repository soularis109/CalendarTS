import {User} from "../../../models/User";

export interface AuthState {
    isAuth: boolean;
    user: User;
    isLoading: boolean;
    error: string;
}

export enum AuthActionEnum{
    SET_AUTH = "SET_AUTH",
    SET_ERROR = "SET_ERROR",
    SET_USER = "SET_USER",
    SET_IS_LOADING = "SET_IS_LOADING"
}

export interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean
}
export interface SetErrorAction {
    type: AuthActionEnum.SET_ERROR;
    payload: string
}
export interface SetIsLoadingAction {
    type: AuthActionEnum.SET_IS_LOADING;
    payload: boolean
}
export interface SetUserAction {
    type: AuthActionEnum.SET_USER;
    payload: User
}

export type AuthAction =
    SetAuthAction |
    SetErrorAction |
    SetIsLoadingAction |
    SetUserAction
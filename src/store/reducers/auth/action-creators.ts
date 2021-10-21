import {User} from "../../../models/User";
import {AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";
import {AppDispatch} from "../../index";
import axios from "axios";



export const AuthActionCreators = {
    setUser: (user: User): SetUserAction => ({
        type: AuthActionEnum.SET_USER, payload: user
    }),
    setIsAuth: (auth: boolean): SetAuthAction => ({
        type: AuthActionEnum.SET_AUTH, payload: auth
    }),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({
        type: AuthActionEnum.SET_IS_LOADING, payload
    }),
    setError: (payload: string): SetErrorAction => ({
        type: AuthActionEnum.SET_ERROR, payload
    }),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            // имитация сервера
            setTimeout(async () => {
                const response = await axios.get<User[]>('./users.json')
                // проверка совпадения
                const mockUser = response.data.find(user => user.username === username && user.password === password)
                if (mockUser) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', mockUser.username)
                    dispatch(AuthActionCreators.setIsAuth(true))
                    dispatch(AuthActionCreators.setUser(mockUser))
                } else {
                    dispatch(AuthActionCreators.setError('Некорректные данные'))
                }
            },1000)
        } catch (e) {
            dispatch(AuthActionCreators.setError("Error"))
        }
        dispatch(AuthActionCreators.setIsLoading(false))
    },

    logout: () => async (dispatch: AppDispatch) => {
            localStorage.removeItem('auth')
            localStorage.removeItem('username')
            dispatch(AuthActionCreators.setUser({} as User))
            dispatch(AuthActionCreators.setIsAuth(false))
    }

}
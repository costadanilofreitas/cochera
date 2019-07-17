import { AsyncStorage } from 'react-native'
import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    LOADING_USER,
    USER_LOADED
} from './actionTypes'
import axios from 'axios'
import { setMessage } from './message'
import { server } from '../../common'

export const userLogged = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logout = () => {
    delete axios.defaults.headers.common['Authorization']
    AsyncStorage.removeItem('userData')
    return {
        type: USER_LOGGED_OUT
    }
}

export const createUser = user => {
    return dispatch => {
        dispatch(loadingUser())
        axios.post(`${server}/signup`, {
            name: user.name,
            email: user.email,
            password: user.password,
            confirmPassword: user.password
        })
            .catch(err => {
                config.log(err)
                dispatch(setMessage({
                    title: 'Erro',
                    text: 'Ocorreu um erro ao se registrar!'
                }))
            })
            .then(res => {
                dispatch(login(user))
            })
    }
}

export const loadingUser = () => {
    return {
        type: LOADING_USER
    }
}

export const userLoaded = () => {
    return {
        type: USER_LOADED
    }
}

export const login = user => {
    return dispatch => {
        dispatch(loadingUser())
        axios.post(`${server}/signin`, {
            email: user.email,
            password: user.password
        })
            .catch(err => {
                console.log(err)
                dispatch(setMessage({
                    title: 'Erro',
                    text: 'Ocorreu um erro ao se logar!'
                }))
            })
            .then(res => {
                user.token = res.data.token
                delete user.password
                user.name = res.data.name
                dispatch(userLogged(user))
                dispatch(userLoaded())
                axios.defaults.headers.common['Authorization']
                    = `bearer ${res.data.token}`
                AsyncStorage.setItem('userData', JSON.stringify(res.data))
            })
    }
}
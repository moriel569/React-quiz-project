
import axios from 'axios'
import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionTypes'



export function auth(email, password, isLogin) {
    return async dispatch => {
        const authData = {
            email,
            password,
            returnSecureToken: true
        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDPNGwljt_iqxFy3FTDnO8Sq-ukbf3IRI8'

        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDPNGwljt_iqxFy3FTDnO8Sq-ukbf3IRI8'
        }

        const response = await axios.post(url, authData)
        const data = response.data
        console.log(data)

        const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000) // set User session timeout after 1 hour

        localStorage.setItem('token', data.idToken)
        localStorage.setItem('userId', data.localId)
        localStorage.setItem('expirationDate', expirationDate)

        dispatch(authSuccess(data.idToken))
        dispatch(autoLogout(data.expiresIn))
    }
}


export function autoLogout(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    }
}

export function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')
    return {
        type: AUTH_LOGOUT
    }
}

export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}
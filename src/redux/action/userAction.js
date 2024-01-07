import axios from "axios";
import Cookies from "js-cookie";
import {history} from "../../Lib/history";


export const GetCurrentUser = (token) =>{
    return dispatch => {
        axios(``, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then (({data}) => {
                localStorage.setItem('user',JSON.stringify(data))
                dispatch ({type:'GET_CURRENT_USER',payload:data})
                history.push('/admin')
            })
    }
}
export const getUser = () => {
    return dispatch => {
        const user = JSON.parge(localStorage.getItem('user'))
        dispatch({type:'GET_USER',payload:user})
    }
}

export const logout = () => {
    return dispatch => {
        axios.post('',data)
            .then(({data}) => {
                Cookies.set('token',data.access_token)
                localStorage.setItem('token',data.access_token)
                dispatch({type:'SING_IN',payload:data})
                dispatch(getCuurrentUser(data.access_token))
            })
    }
}
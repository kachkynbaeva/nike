const initialState = {
    user: {},
    token: '',
    isAuth: false
}

export const userReduser = (state = initialState, action) => {
    switch (action.type){
        case 'SING_IN':
            return {
                ...state,token:action.payload.access_token
            }
        case 'GET_CURRENT_USER':
            return {
                ...state,user:action.payload,
                isAuth: true
            }
        case 'GET_USER':
            return  {
                ...state,user:action.payload,isAuth: true
            }
        case 'LOGOUT':
            return state
        default:
            return state

    }
}



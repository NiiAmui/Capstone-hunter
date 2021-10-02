import { Types  } from "./Types"

import { loginValidation } from "../../../myDatabase/database";


export const authenticate = (data) => {
    return {
        type: Types.AUTHENTICATE,
        payload: data
    }
}

export const handleAuthentication = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        loginValidation(data.email, data.password).then((res) => {
            dispatch(authenticate(data.email))
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}



export const handleLogout = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: Types.LOGOUT,
            payload: {}
        })

        resolve()
    })
}



const isloginAction=(data)=>{
    if(isloginAction)
    return {
        type: 'validated',
        payload: data
    }
}
export default isloginAction;    
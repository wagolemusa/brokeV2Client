import axios from "../helper/axios";
import { authConstants } from "./constants"

// Login authantication
export const login = (user) =>{
    console.log(user)
    return async(dispatch) => {
        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = await axios.post("/admin/api/login", {
            ...user
        })
        if(res.status === 200){
            const { token, user } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: authConstants.LOGIN_SECCESS,
                payload: {
                    token, user
                }
            })
        }else{
            if(res.status === 400){
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: { error: res.data.error}
                });
            }
        }
    }
}




export const isUserLogin = () => {
    return  async dispatch => {
        const token = localStorage.getItem('token');
        if(token){
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SECCESS,
                payload: {
                    token, user
                }
            });
        }else{
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: {error: 'Failed to Login'}
            })
        }

    }
}


// export const isUserLogin = () => {
//     return async dispatch => {
//         const token = localStorage.getItem('token');
//         if(token){
//             const user = JSON.parse(localStorage.getItem('user'));
//             dispatch({
//                 type: authConstants.LOGIN_SECCESS,
//                 payload: {
//                     token, user
//                 }
//             });
//         }else {
//             dispatch({
//                 type: authConstants.LOGIN_FAILURE,
//                 payload: {error: 'Failed to Login'}
//             });
//         }
//     }
// }

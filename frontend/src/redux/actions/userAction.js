import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAIL,REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAIL,LOGOUT_REQUEST,LOGOUT_SUCCESS,LOGOUT_FAIL
,UPDATE_PROFILE_REQUEST,UPDATE_PROFILE_SUCCESS,UPDATE_PROFILE_FAIL} from '../constants/userConstants';
import axios from 'axios';

export const getUser=(mail,pass)=>{
    return (dispatch)=>{
        dispatch({type:LOGIN_REQUEST});

        axios.post('/api/users/login',{
            email:mail,
            password:pass
        }).then((result)=>{
            dispatch({type:LOGIN_SUCCESS,payload:result.data.user});
        }).catch((err)=>{
            dispatch({type:LOGIN_FAIL,payload:err});
        })

    }
}

export const registerUser=(nam,mail,pass)=>{
    return (dispatch)=>{
        dispatch({type:REGISTER_REQUEST});

        axios.post('/api/users/register',{
            name:nam,
            email:mail,
            password:pass
        }).then((result)=>{
            dispatch({type:REGISTER_SUCCESS,payload:result.data.user});
        
        }).catch((err)=>{
            dispatch({type:REGISTER_FAIL,payload:err});
           
        })

    }
}

export const getUserDetail=()=>{
    return (dispatch)=>{
        dispatch({type:LOGIN_REQUEST});

        axios.get('/api/users/me').then((result)=>{
            dispatch({type:LOGIN_SUCCESS,payload:result.data.user});
        
        }).catch((err)=>{
            dispatch({type:LOGIN_FAIL,payload:err});
           
        })

    }
}

export const logout=()=>{
    return (dispatch)=>{
        dispatch({type:LOGOUT_REQUEST});

        axios.get('/api/users/logout').then((result)=>{
            dispatch({type:LOGOUT_SUCCESS});
        
        }).catch((err)=>{
            dispatch({type:LOGOUT_FAIL,payload:err});
           
        })

    }
}

export const updateProfile=(nam,mail)=>{
    return (dispatch)=>{
        dispatch({type:UPDATE_PROFILE_REQUEST});

        axios.put('/api/users/me/update',{
            name:nam,
            email:mail
        }).then((result)=>{
            dispatch({type:UPDATE_PROFILE_SUCCESS,payload:result.data.success});
        
        }).catch((err)=>{
            dispatch({type:UPDATE_PROFILE_FAIL,payload:err});
           
        })

    }
}
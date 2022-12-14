import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAIL,REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAIL,LOGOUT_REQUEST,LOGOUT_SUCCESS,LOGOUT_FAIL
,UPDATE_PROFILE_REQUEST,UPDATE_PROFILE_SUCCESS,UPDATE_PROFILE_FAIL,LOAD_USER_REQUEST,LOAD_USER_SUCCESS,LOAD_USER_FAIL, CLEAR_ERROR,RESET_PASSWORD_REQUEST,RESET_PASSWORD_SUCCESS,RESET_PASSWORD_FAIL} from '../constants/userConstants';
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
//Load User 
export const loadUser = () => async (dispatch) => {
    try {
      dispatch({ type: LOAD_USER_REQUEST });
  
      const { data } = await axios.get(`/api/users/me`);
  
      dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
    }
  };

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

export const clearError=()=>{
    return (dispatch)=>{
        dispatch({type:CLEAR_ERROR});
    }
}

export const resetPassword=(password,confirmPassword,token)=>{
    return (dispatch)=>{
        dispatch({type:RESET_PASSWORD_REQUEST});

        axios.put(`/api/users/password/reset/${token}`,{
            password:password,
            confirmPassword:confirmPassword
        }).then((result)=>{
            dispatch({type:RESET_PASSWORD_SUCCESS,payload:result.data.user});
        console.log(result);
        }).catch((err)=>{
            dispatch({type:RESET_PASSWORD_FAIL,payload:err});
           console.log(err);
        })

    }
}
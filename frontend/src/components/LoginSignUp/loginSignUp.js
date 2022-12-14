import React, { Fragment, useRef, useState,useEffect } from "react";
import { Link } from "react-router-dom";
// import MailOutlineIcon from "@material-ui/icons/MailOutline";
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import FaceIcon from '@mui/icons-material/Face';
import {clearError, getUser,registerUser} from '../../redux/actions/userAction';
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'

// import '../Component/LoginSignUp.css';
import { REGISTER_SUCCESS,REGISTER_FAIL,REGISTER_REQUEST } from "../../redux/constants/userConstants";
import { LOGIN_SUCCESS,LOGIN_REQUEST,LOGIN_FAIL } from "../../redux/constants/userConstants";
import './loginSignUp.css'
import { Paper } from "@mui/material";
import { toast,ToastContainer } from "react-toastify";
import axios from 'axios';



const LoginSignUp =()=>{
    
    const loginTab = useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);

    const dispatch=useDispatch();

    const navigate=useNavigate();
    

    const [loginEmail,setLoginEmail] = useState("");
    const [loginPassword,setLoginPassword] = useState("");

    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
    });

   var loggedInUser=useSelector((state)=>{
    return state.user;
   });
       

    const {name,email,password} = user;
    const [avatar,setAvatar] = useState();
    const [avatarPreview,setAvatarPreview] = useState("/Profile.png");

    const loginSubmit = (e)=>{
        e.preventDefault();
        axios.post('/api/users/login',{
            email:loginEmail,
            password:loginPassword
        }).then((result)=>{
            toast.success("login success!",{position:toast.POSITION.TOP_CENTER});
            dispatch({type:LOGIN_SUCCESS,payload:result.data.user});
            navigate('/');
        }).catch((err)=>{
            toast.error("invalid username or password",{position:toast.POSITION.TOP_CENTER});
            
        })
        // dispatch(getUser(loginEmail,loginPassword));
        
        // console.log("Login Form Submitted");
    };

    const registerSubmit = (e)=>{
        
        e.preventDefault();
        const myForm = new FormData();

        myForm.set("name",name);
        myForm.set("email",email);
        myForm.set("password",password);
        myForm.set("avatar",avatar);
        console.log("submitted");
        console.log(name,email,password)

        if(password.length<8){
            toast.error("password must be at least 8 characters long",{position:toast.POSITION.TOP_CENTER});
        }

        else{
            axios.post('/api/users/register',{name,email,password}).then((result)=>{
                dispatch({type:REGISTER_SUCCESS,payload:result.data.user});
                navigate("/");
            }).catch((err)=>{
                toast.error("registeration failed:-email already taken",{position:toast.POSITION.TOP_CENTER});
                dispatch({type:REGISTER_FAIL,payload:err});
            })
        }

// dispatch(registerUser(name,email,password));
// navigate('/');
    }

    const registerDataChange = (e) =>{
        if(e.target.name === "avatar"){
            const reader = new FileReader();

            reader.onload=()=>{
                if(reader.readyState === 2){
                    setAvatarPreview(reader.result);
                    setAvatar(reader.result);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
        else{
            setUser({ ...user,[e.target.name]:e.target.value});
        }
    };

    const switchTabs =(e,tab)=>{
        if(tab === "login"){
            switcherTab.current.classList.add("shiftToNeutral");
            switcherTab.current.classList.remove("shiftToRight");

            registerTab.current.classList.remove("shiftToNeutralForm");
            loginTab.current.classList.remove("shiftToLeft");
        }
        if(tab === "register"){
            switcherTab.current.classList.add("shiftToRight");
            switcherTab.current.classList.remove("shiftToNeutral");

            registerTab.current.classList.add("shiftToNeutralForm");
            loginTab.current.classList.add("shiftToLeft");
        }
    };

    // useEffect(()=>{
    //     if(loggedInUser.error!=''){
    //         toast.error("wrong email or password!",{position:toast.POSITION.TOP_CENTER});
          
    //     }
    //     if(loggedInUser.isAuthenticated){
    //         navigate('/');
    //     }
    // },[])
    // dispatch(clearError);
    return(
        <Fragment>
           <ToastContainer/>
            <div className="LoginSignUpContainer">
                <Paper elevation={5} className="LoginSignUpBox" >
                    <div>
                        <div className="login_signUp_toggle">
                            <p onClick={(e)=>switchTabs(e,"login")}>LOGIN</p>
                            <p onClick={(e)=>switchTabs(e,"register")}>REGISTER</p>
                        </div>
                        <button ref={switcherTab}></button>
                    </div>
                    <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                        <div className="loginEmail">
                            <MailOutlineIcon />
                            <input
                            type="email"
                            placeholder="Email"
                            required
                            value={loginEmail}
                            onChange={(e)=>setLoginEmail(e.target.value)}
                            />
                        </div>
                        
                        <div className="loginPassword">
                            <LockOpenIcon />
                            <input
                            type="password"
                            placeholder="Password"
                            required
                            value={loginPassword}
                            onChange={(e)=>setLoginPassword(e.target.value)}
                            />
                        </div>
                         <Link to="/password/forgot">Forgot Password ?</Link>
                        <input type="submit" value="Login" className="loginBtn" />
                    </form>
                    <form
                    className="signUpForm"
                    ref={registerTab}
                    encType="multipart/form-data"
                    onSubmit={registerSubmit}
                    >
                        <div className="signUpName">
                            <FaceIcon />
                            <input
                            type="text"
                            placeholder="Name"
                            required
                            name="name"
                            value={name}
                            onChange={registerDataChange}
                            />
                        </div>
                        <div className="signUpEmail">
                            <MailOutlineIcon />
                            <input
                            type="email"
                            placeholder="Email"
                            required
                            name="email"
                            value={email}
                            onChange={registerDataChange}
                            />
                        </div>
                        <div className="signUpPassword">
                            <LockOpenIcon />
                            <input
                            type="password"
                            placeholder="Password"
                            required
                            name="password"
                            value={password}
                            onChange={registerDataChange}
                            />
                        </div>
                        {/* <div id="registerImage">
                            <img src={avatarPreview} alt="Avatar Preview" />
                            <input
                            type="file"
                            name="avatar"
                            accept="image/"
                            onChange={registerDataChange}
                            />
                        </div> */}
                        <input type="submit" value="Register" className="signUpBtn" />
                    </form>
                </Paper>
            </div>
        </Fragment>
    );
};

export default LoginSignUp;
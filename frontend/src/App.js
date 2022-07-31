import React,{useEffect} from 'react';
// import './App.css';




import {Outlet} from 'react-router-dom';
import Header from './components/Header/Header';
import {getUserDetail} from './redux/actions/userAction';
import {useDispatch} from 'react-redux'


function App() {
const dispatch=useDispatch();
    useEffect(()=>{
        console.log('hi');
        dispatch(getUserDetail());
    },[dispatch]);

   
    
    return (
        <>
        <Header />
          <Outlet />
         </>
    )
}

export default App
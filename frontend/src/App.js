import React,{useEffect} from 'react';
// import './App.css';




import {Outlet} from 'react-router-dom';
import Header from './components/Header/Header';
import {getUserDetail} from './redux/actions/userAction';
import {useDispatch} from 'react-redux'
import Footer from './components/Footer/Footer';


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
          <Footer />
         </>
    )
}

export default App
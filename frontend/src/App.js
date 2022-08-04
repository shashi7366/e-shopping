import React,{useEffect} from 'react';
// import './App.css';

import WebFont from "webfontloader";
import store from 'storejs';
import { loadUser } from "./redux/actions/userAction";
import { useState } from 'react';
import {Outlet} from 'react-router-dom';
import Header from './components/Header/Header';
import {getUserDetail} from './redux/actions/userAction';
import {useDispatch} from 'react-redux'
import Footer from './components/Footer/Footer';
import axios from 'axios';


function App() {

  
//     const [stripeApiKey, setStripeApiKey] = useState("");

//   async function getStripeApiKey() {
//     const { data } = await axios.get("/api/stripeapikey");

//     setStripeApiKey(data.stripeApiKey);
//   }

//   useEffect(() => {
//     WebFont.load({
//       google: {
//         families: ["Roboto", "Droid Sans", "Chilanka"],
//       },
//     });

//     store.dispatch(loadUser());

//     getStripeApiKey();
//   }, []);


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
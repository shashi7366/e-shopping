import React,{useEffect} from 'react';
// import './App.css';


import {Outlet} from 'react-router-dom';
import Header from './components/Header/Header';
import {clearError, getUserDetail} from './redux/actions/userAction';
import {useDispatch,useSelector} from 'react-redux'
import Footer from './components/Footer/Footer';

import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/navbar/navbar';

// toast.configure();
function App() {
    var {isAuthenticated,error}=useSelector((state)=>{
        return state.user;
    });
  
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
        dispatch(getUserDetail());
        // dispatch(clearError);
    },[dispatch]);

   
    
    return (
        <>
        <ToastContainer />
        {/* <Header /> */}
        <Navbar />
          <Outlet  />

          <Footer />
         </>
    )
}

export default App
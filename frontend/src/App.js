import React,{useEffect} from 'react';
// import './App.css';


import {Outlet} from 'react-router-dom';
import Header from './components/Header/Header';
import {getUserDetail} from './redux/actions/userAction';
import {useDispatch,useSelector} from 'react-redux'
import Footer from './components/Footer/Footer';

import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
        console.log('hi');
if(!isAuthenticated){
    toast.error("login failed",{position:toast.POSITION.TOP_CENTER});
}
        dispatch(getUserDetail());
    },[dispatch]);

   
    
    return (
        <>
        <ToastContainer />
        <Header />
          <Outlet />

          <Footer />
         </>
    )
}

export default App
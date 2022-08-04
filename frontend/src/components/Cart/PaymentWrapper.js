import React,{useState,useEffect} from 'react';
import Payment from './Payment';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios';

function PaymentWrapper() {
    const [stripeApiKey, setStripeApiKey] = useState("");
    async function getStripeApiKey() {
             const { data } = await axios.get("/api/payments/stripeapikey");
        
             setStripeApiKey(data.stripeApiKey);
          }

          useEffect(()=>{
            getStripeApiKey();
          },[])
  return (<>{stripeApiKey && <Elements stripe={loadStripe(stripeApiKey)}> <Payment/></Elements>}</>
    
  )
}

export default PaymentWrapper
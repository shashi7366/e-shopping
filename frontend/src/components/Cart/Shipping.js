import React, { Fragment, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { saveShippingInfo } from "../../redux/actions/cartAction";


import { Country, State } from "country-state-city";

import { Button, MenuItem, Paper, TextField, Typography } from "@mui/material";
import CheckoutSteps from "./CheckoutSteps";
import {useNavigate} from 'react-router-dom'

 
const Shipping = ({ history }) => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  // const alert = Alert();
  const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [country, setCountry] = useState(shippingInfo.country);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 10 || phoneNo.length > 10) {
      alert("phone no must be 0-10 characters long")
      return;
    }

    console.log({address, city, state, country, pinCode, phoneNo});
    dispatch(
      saveShippingInfo({ address, city, state, country, pinCode, phoneNo })
    );
    navigate('/order/confirm');
  };

  return (
    <Fragment>
      {/* <MetaData title="Shipping Details" /> */}

      
      <div style={{width:"100%",display:"flex",justifyContent:"center",}}><CheckoutSteps activeStep={0} /></div>
      <div style={{marginTop:'2%',backgroundColor:"whitesmoke",display:"flex",flexDirection:"column",alignItems:"center"}}>
      
        <Paper sx={{textAlign:'center',padding:'3vmax',width:"50%",marginTop:"3%",marginBottom:"3%"}}>
          <h2 className="shippingHeading">Shipping Details</h2>

          <form
            encType="multipart/form-data"
            onSubmit={shippingSubmit}
          >
            <div style={{marginTop:'2vmax'}}>
              <TextField 
              fullWidth
                placeholder="Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div style={{marginTop:'2vmax'}}>
              <TextField
               fullWidth
                placeholder="City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div style={{marginTop:'2vmax'}}>
              <TextField
              fullWidth
                type="number"
                placeholder="Pin Code"
                required
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>

            <div style={{marginTop:'2vmax'}}>
              <TextField
              fullWidth
                type="number"
                placeholder="Phone Number"
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                size="10"
              />
            </div>

            <div style={{marginTop:'2vmax'}}>

              <TextField
              fullWidth
              select
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Country</option>
                {Country &&
                  Country.getAllCountries().map((item) => (
                    <MenuItem key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </MenuItem>
                  ))}
              </TextField>
            </div>

            {country && (
              <div style={{marginTop:'2vmax'}}>

                <TextField
                fullWidth
                select
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="">State</option>
                  {State &&
                    State.getStatesOfCountry(country).map((item) => (
                      <MenuItem key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </MenuItem>
                    ))}
                </TextField>
              </div>
            )}

            <Button
            variant="contained"
              type="submit"
              value="Continue"
              sx={{height:'3vmax',width:'8vmax',margin:'3vmax'}}
              disabled={state ? false : true}
            >Continue</Button>
          </form>
        </Paper>
      </div>
    </Fragment>
  );
};

export default Shipping;

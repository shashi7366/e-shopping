import React from "react";
import { TextField, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';

import {useNavigate } from 'react-router-dom';

import { updateProfile } from "../../redux/actions/userAction";

function UpdateProfile() {
  
    
    var navigate=useNavigate();
    

    var dispatch = useDispatch();

    // var { loaded } = useSelector((state) => {
    //     return state.profile;
    // });

    var { user } = useSelector((state) => {
        return state.user;
    });

    // useEffect(() => {
    //     dispatch(getIndividualProduct(id));
    // }, [dispatch,id]);

    const schema = yup.object({
        name: yup.string("enter first name").required('name is required').min(1),
        email: yup.string().required("email is required").min(1)
    });

    const formik = useFormik({
        initialValues: {
            name:user.name,
            email:user.email
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(updateProfile(values.name,values.email));
            navigate('/profile');
        }})



    return <div style={{minHeight:'60vmax'}}><form  onSubmit={formik.handleSubmit}>
    <Paper elevation={2} sx={{ mx: '10%', px: '5%', py: '5%', margin: '2%', minHeight:'40vmax'}}>
        <Grid container spacing={2}>
            <Grid item xs={12} lg={12}>
                <Typography variant="h3">Edit Profile</Typography>
            </Grid>
            <Grid item xs={12} lg={12}>
            <Typography variant="h6">Name</Typography>
                <TextField fullWidth name="name" id="name"  variant="standard"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
            </Grid>
            <Grid item xs={12} lg={12}>
            <Typography variant="h6">Email</Typography>
                <TextField fullWidth name="email" id="email"  variant="standard"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description} />
            </Grid>

            <Grid item xs={2} lg={2}>
                <Button variant="contained" type='submit'>
                    Update
                </Button>
            </Grid>
        </Grid>
    </Paper>
    </form></div>
  
}

export default UpdateProfile;
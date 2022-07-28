import React, { useEffect } from "react";
import { TextField, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { getIndividualProduct } from "../../redux/actions/productAction";
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditProduct() {

    var params = useParams();
    var navigate=useNavigate();
    var id = params.id;

    var dispatch = useDispatch();

    var { loading, product } = useSelector((state) => {
        return state.individualProduct;
    });

    useEffect(() => {
        dispatch(getIndividualProduct(id));
    }, [dispatch]);

    const schema = yup.object({
        name: yup.string("enter first name").required('name is required').min(1),
        description: yup.string().required("description is required").min(1),
        price: yup.number().required("it is mandartory").min(1),
        imageUrl1: yup.string().required("url is required").min(1),
        stock: yup.number(),
        category: yup.string().required("category is mandatory").min(1)
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: '',
            imageUrl1: '',
            imageUrl2: '',
            imageUrl3: '',
            stock: '',
            category: ''
        },
        validationSchema: schema,
        onSubmit: (values) => {
            var imgArr = [{ url: values.imageUrl1 }];
            if (values.imageUrl2) {
                imgArr.push({ url: values.imageUrl2 })
            }

            if (values.imageUrl3) {
                imgArr.push(values.imageUrl3)
            }

            axios.put(`/api/products/${product._id}`, {
                name: values.name,
                description: values.description,
                price: values.price,
                images: imgArr,
                stock: values.stock,
                category: values.category
            }).then((res)=>{
                navigate('/admin');
            })
        }})



    return <div>{(!loading) && (<form onSubmit={formik.handleSubmit}><Paper elevation={2} sx={{ mx: '10%', px: '5%', py: '5%', margin: '2%' }}>
        <Grid container spacing={2}>
            <Grid item xs={12} lg={12}>
                <Typography variant="h3">Edit {product.name}</Typography>
            </Grid>
            <Grid item xs={6} lg={6}>
                <TextField fullWidth name="name" id="name" label={product.name} variant="standard"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
            </Grid>
            <Grid item xs={6} lg={6}>
                <TextField fullWidth name="description" id="description" label={product.description} variant="standard"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description} />
            </Grid>

            <Grid item xs={6} lg={6}>
                <TextField fullWidth name="price" id="price" label={product.price} variant="standard"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                    error={formik.touched.price && Boolean(formik.errors.price)}
                    helperText={formik.touched.price && formik.errors.price} />
            </Grid>

            <Grid item xs={6} lg={6}>
                <TextField fullWidth name="imageUrl1" id="imageUrl1" label={product.images[0].url} variant="standard"
                    onChange={formik.handleChange}
                    value={formik.values.imageUrl1}
                    error={formik.touched.imageUrl1 && Boolean(formik.errors.imageUrl1)}
                    helperText={formik.touched.imageUrl1 && formik.errors.imageUrl1} />
            </Grid>

            <Grid item xs={6} lg={6}>
                <TextField fullWidth name="imageUrl2" id="imageUrl2" label={product.imageUrl2} variant="standard"
                    onChange={formik.handleChange}
                    value={formik.values.imageUrl2}
                    error={formik.touched.imageUrl2 && Boolean(formik.errors.imageUrl2)}
                    helperText={formik.touched.imageUrl2 && formik.errors.imageUrl2} />
            </Grid>

            <Grid item xs={6} lg={6}>
                <TextField fullWidth name="imageUrl3" id="imageUrl3" label={product.imageUrl3} variant="standard"
                    onChange={formik.handleChange}
                    value={formik.values.imageUrl3}
                    error={formik.touched.imageUrl3 && Boolean(formik.errors.imageUrl3)}
                    helperText={formik.touched.imageUrl3 && formik.errors.imageUrl3} />
            </Grid>

            <Grid item xs={6} lg={6}>
                <TextField fullWidth name="stock" id="stock" label={product.stock} variant="standard"
                    onChange={formik.handleChange}
                    value={formik.values.stock}
                    error={formik.touched.stock && Boolean(formik.errors.stock)}
                    helperText={formik.touched.stock && formik.errors.stock} />
            </Grid>

            <Grid item xs={6} lg={6}>
                <TextField fullWidth name="category" id="category" label={product.category} variant="standard"
                    onChange={formik.handleChange}
                    value={formik.values.category}
                    error={formik.touched.category && Boolean(formik.errors.category)}
                    helperText={formik.touched.category && formik.errors.category} />
            </Grid>

            <Grid item xs={2} lg={2}>
                <Button variant="contained" type='submit'>
                    Add
                </Button>
            </Grid>
        </Grid>
    </Paper>
    </form>)}</div>
}

export default EditProduct;
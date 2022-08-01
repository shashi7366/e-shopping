import React from 'react';
import { TextField, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import * as yup from 'yup';
import { withFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <form onSubmit={this.props.handleSubmit}><Paper elevation={2} sx={{ mx: '10%', px: '5%', py: '5%',margin:'2%' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={12}>
                    <Typography variant="h3">Add a Product</Typography>
                </Grid>
                <Grid item xs={6} lg={6}>
                    <TextField fullWidth name="name" id="name" label="Name" variant="standard"
                        onChange={this.props.handleChange}
                        value={this.props.values.name}
                        error={this.props.touched.name && Boolean(this.props.errors.name)}
                        helperText={this.props.touched.name && this.props.errors.name}
                    />
                </Grid>
                <Grid item xs={6} lg={6}>
                    <TextField fullWidth name="description" id="description" label="description" variant="standard"
                        onChange={this.props.handleChange}
                        value={this.props.values.description}
                        error={this.props.touched.description && Boolean(this.props.errors.description)}
                        helperText={this.props.touched.description && this.props.errors.description} />
                </Grid>
                
                <Grid item xs={6} lg={6}>
                    <TextField fullWidth name="price" id="price" label="price" variant="standard"
                        onChange={this.props.handleChange}
                        value={this.props.values.price}
                        error={this.props.touched.price && Boolean(this.props.errors.price)}
                        helperText={this.props.touched.price && this.props.errors.price} />
                </Grid>

                <Grid item xs={6} lg={6}>
                    <TextField fullWidth name="imageUrl1" id="imageUrl1" label="imageUrl1" variant="standard"
                        onChange={this.props.handleChange}
                        value={this.props.values.imageUrl1}
                        error={this.props.touched.imageUrl1 && Boolean(this.props.errors.imageUrl1)}
                        helperText={this.props.touched.imageUrl1 && this.props.errors.imageUrl1} />
                </Grid>

                <Grid item xs={6} lg={6}>
                    <TextField fullWidth name="imageUrl2" id="imageUrl2" label="imageUrl2" variant="standard"
                        onChange={this.props.handleChange}
                        value={this.props.values.imageUrl2}
                        error={this.props.touched.imageUrl2 && Boolean(this.props.errors.imageUrl2)}
                        helperText={this.props.touched.imageUrl2 && this.props.errors.imageUrl2} />
                </Grid>

                <Grid item xs={6} lg={6}>
                    <TextField fullWidth name="imageUrl3" id="imageUrl3" label="imageUrl3" variant="standard"
                        onChange={this.props.handleChange}
                        value={this.props.values.imageUrl3}
                        error={this.props.touched.imageUrl3 && Boolean(this.props.errors.imageUrl3)}
                        helperText={this.props.touched.imageUrl3 && this.props.errors.imageUrl3} />
                </Grid>

                <Grid item xs={6} lg={6}>
                    <TextField fullWidth name="stock" id="stock" label="stock" variant="standard"
                        onChange={this.props.handleChange}
                        value={this.props.values.stock}
                        error={this.props.touched.stock && Boolean(this.props.errors.stock)}
                        helperText={this.props.touched.stock && this.props.errors.stock} />
                </Grid>

                <Grid item xs={6} lg={6}>
                    <TextField fullWidth name="category" id="category" label="category" variant="standard"
                        onChange={this.props.handleChange}
                        value={this.props.values.category}
                        error={this.props.touched.category && Boolean(this.props.errors.category)}
                        helperText={this.props.touched.category && this.props.errors.category} />
                </Grid>
                
                <Grid item xs={2} lg={2}>
                    <Button variant="contained" type='submit'>
                        Add
                    </Button>
                </Grid>
            </Grid>
        </Paper>
        </form>;
    }
}

const AddValidation=(AddProduct)=>{
    
    return withFormik({
        mapPropsToValues({ name, description,price,imageUrl1,imageUrl2,imageUrl3,stock,category}) {
          return {
            name: name || '',
            description: description || '',
            price:price || '',
            imageUrl1:imageUrl1 || '',
            imageUrl2:imageUrl2 || null,
            imageUrl3:imageUrl3 || null,
            stock:stock || 1,
            category:category || ''
          }
        },
        validationSchema: yup.object({
            name:yup.string("enter first name").required('name is required').min(1),
            description:yup.string().required("description is required").min(1),
            price:yup.number().required("it is mandartory").min(1),
            imageUrl1:yup.string().required("url is required").min(1),
            stock:yup.number(),
            category:yup.string().required("category is mandatory").min(1)
          }),
          handleSubmit:(values)=>{
            var imgArr=[{url:values.imageUrl1}];
            if(values.imageUrl2){
                imgArr.push({url:values.imageUrl2})
            }

            if(values.imageUrl3){
                imgArr.push({url:values.imageUrl3})
            }

            axios.post('/api/products/new',{
                name:values.name,
                description:values.description,
                price:values.price,
                images:imgArr,
                stock:values.stock,
                category:values.category
            }).then(()=>{
                window.location.reload();
            })
          }
      })(AddProduct);
}

export default AddValidation(AddProduct);
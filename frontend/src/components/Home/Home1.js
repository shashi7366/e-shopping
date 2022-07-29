import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../redux/actions/productAction';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import './Home1.css';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
function Home1() {
    var dispatch = useDispatch();
    var { products } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch]);

    return <Grid container spacing={2}>
        {products.length > 0 && products.map((product) => {
            return <Grid item lg={3} md={4} xs={12} className="productCard"><Card key={product.id} sx={{ maxWidth: 345}}>
                
                <CardMedia sx={{textAlign:'center',minHeight:'200px'}}><img src={product.images[0].url} alt="product img" style={{height:'200px',width:'200px'}}></img></CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                </CardContent>
            </Card>  </Grid>
        })}</Grid>

}

export default Home1
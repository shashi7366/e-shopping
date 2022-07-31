import React,{useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { useParams,Link } from 'react-router-dom';
import { getSearchProduct } from '../../redux/actions/productAction';
import ReactStars from 'react-rating-stars-component';
import {Paper,Typography,TextField,MenuItem} from "@mui/material";
import Slider from '@mui/material/Slider';
import './SearchResult.css';

function SearchResult({products}) {
  var [price,setPrice]=useState([0,200000]);
  var [category,setCategory]=useState('');

const handleChange=(e)=>{
setPrice(e.target.value);
}

var link;

const handleChangeCategory=(e)=>{
  setCategory(e.target.value);
  }

  const params=useParams();
  var dispatch = useDispatch();
    var { products,loaded } = useSelector(state => state.searchProduct);

    useEffect(() => {

      if(category){
        link=`/api/products/searchProduct?keyword=${params.keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`
      }
      else{
        link=`/api/products/searchProduct?keyword=${params.keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}`
      }
        dispatch(getSearchProduct(link));
    }, [dispatch,params,price,category,link]);
console.log(products);
  return <div>
  <Paper className='filterBox'>
    <div className='priceFilter'>
      <Typography>Price Range</Typography>
      <Slider
        value={price}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={200000}
      />
    </div>

    <div className='categoryFilter'>
    
    <TextField
          select
          label="Select Category"
          value={category}
          onChange={handleChangeCategory}
          helperText="Please select category"
        >
            <MenuItem key="electronics" value="electronics">
              Electronics
            </MenuItem>

            <MenuItem key="clothing" value="clothing">
            Clothing
            </MenuItem>

            <MenuItem key="furnitures" value="furnitures">
            Furnitures
            </MenuItem>

            <MenuItem key="Personal Computer" value="personal computer">
            Personal Computer
            </MenuItem>
         
        </TextField>
    </div>
  </Paper>
  <div className='ProductContainer'>
    {loaded && products.map((product,i)=>{
        return<Link to={`/${product._id}`} key={i}><Paper spacing={2} className='productCard' >
        <img 
        className='productItemImage'
            src={product.images[0].url}
            alt="image not available"
        />
        <div className='productDetails'>
        <Typography variant='h5'>{product.name}</Typography>
        <ReactStars
        edit={false}
        count={5}
        isHalf={true}
        value={product.rating}
        color="gray"
        activeColor="yellow"
        size={20}
         />
         <Typography variant='h6'>${product.price}</Typography>
        </div>
       
        </Paper></Link>
    })}
    </div>
    </div>
}

export default SearchResult
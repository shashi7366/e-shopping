import React,{useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { useParams,Link, useSearchParams } from 'react-router-dom';
import { getSearchProduct } from '../../redux/actions/productAction';
import ReactStars from 'react-rating-stars-component';
import {Paper,Typography,TextField,MenuItem} from "@mui/material";
import Slider from '@mui/material/Slider';
import './SearchResult.css';

function SearchResult({products}) {
  var [price,setPrice]=useState([0,200000]);
  var [category,setCategory]=useState('');
  var [searchParams,setSearchParams]=useSearchParams();
const handleChange=(e)=>{
setPrice(e.target.value);
}

var link;

const handleChangeCategory=(e)=>{
  
    setCategory(e.target.value)
 
  
  }

  const params=useParams();
  var dispatch = useDispatch();
    var { products,loaded } = useSelector(state => state.searchProduct);

    useEffect(() => {
      if(category){
        link=`/api/products/searchProduct?keyword=${searchParams.get('keyword')}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`
      }
      else{
        link=`/api/products/searchProduct?keyword=${searchParams.get('keyword')}&price[gte]=${price[0]}&price[lte]=${price[1]}`
      }
        dispatch(getSearchProduct(link));
    }, [dispatch,params,price,category,link]);
console.log(products);
  return <div className='searchResultContainer' style={{ minHeight: '80vmax'}}>
  <Paper className='filterBox'>
  <div className='searchResultFilterBoxSecondaryDiv'>
  <Typography>Price Range</Typography>
  <div style={{width:"100%"}}>
  <Slider
        value={price}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={200000}
      />
  </div>
  <div style={{width:"100%",textAlign:'center'}}>
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

            <MenuItem key="clothing" value="fashion">
            fashion
            </MenuItem>

            <MenuItem key="furnitures" value="grocery">
            grocery
            </MenuItem>

            <MenuItem key="Personal Computer" value="mobile">
            mobile
            </MenuItem>

            <MenuItem key="Personal Computer" value="furnitures">
            furnitures
            </MenuItem>

            <MenuItem key="Personal Computer" value="beauty">
            beauty
            </MenuItem>

            <MenuItem key="Personal Computer" value="travel">
            travel
            </MenuItem>
         
        </TextField></div></div>
    {/* <div className='priceFilter'>
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

            <MenuItem key="clothing" value="fashion">
            fashion
            </MenuItem>

            <MenuItem key="furnitures" value="grocery">
            grocery
            </MenuItem>

            <MenuItem key="Personal Computer" value="mobile">
            mobile
            </MenuItem>

            <MenuItem key="Personal Computer" value="furnitures">
            furnitures
            </MenuItem>

            <MenuItem key="Personal Computer" value="beauty">
            beauty
            </MenuItem>

            <MenuItem key="Personal Computer" value="travel">
            travel
            </MenuItem>
         
        </TextField>
    </div> */}
  </Paper>
  <div className='searchResultProductContainer'>
    {loaded && products.map((product,i)=>{
        return<Link to={`/${product._id}`} key={i}><Paper spacing={2} className='searchResultProductCard' >
        <img 
        className='productItemImage'
            src={product.images[0].url}
            alt="image not available"
        />
        <div className='searchResultProductDetails'>
        <Typography variant='h5' sx={{textDecoration:"none"}}>{product.name}</Typography>
        <ReactStars
        edit={false}
        count={5}
        isHalf={true}
        value={product.rating}
        color="gray"
        activeColor="yellow"
        size={20}
         />
         <p style={{color:"green"}}>({product.noOfRatings} ratings)</p>
         <p style={{textDecoration:"none"}}>{product.description}</p>
        </div>
        <div className='searchResultThirdDiv'>
         <Typography variant='h5'>₹{product.price}</Typography>
         {product.price>1000?<p style={{color:"green"}}>free delivery</p>:<p>delivery charges apply</p>}
         </div>
       
        </Paper></Link>
    })}
    </div>
    </div>
}

export default SearchResult
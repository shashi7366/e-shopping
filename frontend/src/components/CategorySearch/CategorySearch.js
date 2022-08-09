import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate,useSearchParams,Link} from 'react-router-dom';
import { getSearchProduct } from '../../redux/actions/productAction';
import ReactStars from 'react-rating-stars-component';
import {Paper,Typography,TextField,MenuItem} from "@mui/material";
import './CategorySearch.css';
import Slider from '@mui/material/Slider';

function CategorySearch() {
    var dispatch = useDispatch();
    var [price,setPrice]=useState([0,200000]);
    var { products,loaded } = useSelector(state => state.searchProduct);
    var [searchParams,setSearchParams]=useSearchParams();

    useEffect(() => {
      let link=`/api/products/searchProduct?category=${searchParams.get('category')}`;
        dispatch(getSearchProduct(link));
    }, [dispatch]);

    const handleChange=(e)=>{
      setPrice(e.target.value);
      }
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
  <Paper elexation={2} sx={{padding:"1%"}}>
<img 
  src="https://cdn2.vectorstock.com/i/1000x1000/53/01/happy-diwali-sale-background-with-mandala-vector-17775301.jpg"
  style={{width:"100%"}}
/>
  </Paper>
        
        </div>
  
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

export default CategorySearch
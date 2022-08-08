import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate,useSearchParams,Link} from 'react-router-dom';
import { getSearchProduct } from '../../redux/actions/productAction';
import ReactStars from 'react-rating-stars-component';
import {Paper,Typography,TextField,MenuItem} from "@mui/material";
import './CategorySearch.css'
function CategorySearch() {
    var dispatch = useDispatch();
    var { products,loaded } = useSelector(state => state.searchProduct);
    var [searchParams,setSearchParams]=useSearchParams();

    useEffect(() => {
      let link=`/api/products/searchProduct?category=${searchParams.get('category')}`;
        dispatch(getSearchProduct(link));
    }, [dispatch]);
console.log(products);
  return (<div className='ProductContainerCategorySearch'>
  {loaded && products.length>0?products.map((product,i)=>{
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
  }):<div style={{minHeight:'80vmax',width:'100%'}}><h1 style={{textAlign:"center"}}>no product of this category available</h1></div>}
  </div>);
}

export default CategorySearch
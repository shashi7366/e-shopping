import React from 'react';
// import './App.css';

import CarouselComponent from './components/Carousel';
import { useDispatch } from 'react-redux';
import {getProduct} from './redux/actions/productAction';
import {Outlet} from 'react-router-dom';
import Header from './components/Header/Header';


function App() {
    const dispatch=useDispatch();
    dispatch(getProduct());
    return (
        
           
            // <Paper elevation={2} sx={{ display: 'flex', height: '60px', alignItems: 'center',backgroundColor:'#0096FF' }}>
            //     <Typography variant='h5' component='div' sx={{ flexGrow: 1, marginLeft: '2%' }}><ShoppingBagIcon />e-Shopping</Typography>
                
            //     <Button variant="contained" color="success" sx={{ marginRight: '2%' }}><Typography variant='body1'>LOGIN</Typography></Button>
            //     <IconButton sx={{ marginRight: '2%' }}><ShoppingCartIcon fontSize='large' /></IconButton>
            // </Paper>

            // <Paper elevation={0} sx={{ display: 'flex', height: '100px', alignItems: 'center', justifyContent: 'center',paddingTop:'20px' }}>
            //     <Paper elevation={0} className='categoryItem'>
            //     <img className="categoryImage" src='./images/electronics.jpg' alt="alt-desc"/>
            //         <Typography className="categoryText" variant='body1'>electronics</Typography>
            //     </Paper>

            //     <Paper elevation={0} className='categoryItem'>
            //     <img className="categoryImage" src='./images/fashion.webp' alt="alt-desc"/>
            //         <Typography className="categoryText" variant='body1'>fashion</Typography>
            //     </Paper>

            //     <Paper elevation={0} className='categoryItem'>
            //     <img className="categoryImage" src='./images/grocery.webp' alt="alt-desc"/>
            //         <Typography className="categoryText" variant='body1'>grocery</Typography>
            //     </Paper>

            //     <Paper elevation={0} className='categoryItem'>
            //     <img className="categoryImage" src='./images/travel.jpg' alt="alt-desc"/>
            //         <Typography className="categoryText" variant='body1'>travel</Typography>
            //     </Paper>

            //     <Paper elevation={0} className='categoryItem'>
            //     <img className="categoryImage" src='./images/mobiles.webp' alt="alt-desc"/>
            //         <Typography className="categoryText" variant='body1'>mobiles</Typography>
            //     </Paper>

            //     <Paper elevation={0} className='categoryItem'>
            //     <img className="categoryImage" src='./images/furnitures.jpg' alt="alt-desc"/>
            //         <Typography className="categoryText" variant='body1'>furniture</Typography>
            //     </Paper>

            //     <Paper elevation={0} className='categoryItem'>
            //     <img className="categoryImage" src='./images/beauty.jpg' alt="alt-desc"/>
            //         <Typography className="categoryText" variant='body1'>beauty</Typography>
            //     </Paper>

            // </Paper>

            // <Paper elevation={0} sx={{ display: 'flex', height: '40px', alignItems: 'center', justifyContent: 'center', margin: '3%'}}>
            //     <TextField
            //     label="search here..."
            //         id="outlined-size-small"
            //         defaultValue=""
            //         size="small"
            //         sx={{width:'50%'}}
            //     /><IconButton><SearchIcon fontSize='large' /></IconButton>
            // </Paper>
        <>
        <Header />
         <CarouselComponent />
          <Outlet />
         </>
    )
}

export default App
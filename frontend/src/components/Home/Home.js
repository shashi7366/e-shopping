import React,{useState} from 'react';
import CarouselComponent from '../Carousel';
import Home1 from './Home1';
import './Home1.css';
import { Button, IconButton, Typography, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {Link, useNavigate,useSearchParams,createSearchParams} from 'react-router-dom'


function Home() {
    
   
    



  return (
    <div>
<Paper elevation={0} sx={{ display: 'flex', height: '100px', alignItems: 'center', justifyContent: 'center',paddingTop:'20px',overflow:'auto',overflowY:'hidden',margin:'1%'}}>
                <Paper elevation={3} className='categoryItem' sx={{backgroundColor:'whitesmoke'}}>
                <img className="categoryImage" src='./images/electronics.jpg' alt="alt-desc"/>
                    <Typography className="categoryText" variant='body1'><Link to='categorySearch?category=electronics' style={{textDecoration:"none",color:'black'}}>electronics</Link></Typography>
                </Paper>

                <Paper elevation={3} className='categoryItem' sx={{backgroundColor:'whitesmoke'}}>
                <img className="categoryImage" src='./images/fashion.webp' alt="alt-desc"/>
                    <Typography className="categoryText" variant='body1'><Link to='categorySearch?category=fashion' style={{textDecoration:"none",color:'black'}}>fashion</Link></Typography>
                </Paper>

                <Paper elevation={3} className='categoryItem' sx={{backgroundColor:'whitesmoke'}}>
                <img className="categoryImage" src='./images/grocery.webp' alt="alt-desc"/>
                    <Typography className="categoryText" variant='body1'><Link to='categorySearch?category=grocery' style={{textDecoration:"none",color:'black'}}>grocery</Link></Typography>
                </Paper>

                <Paper elevation={3} className='categoryItem' sx={{backgroundColor:'whitesmoke'}}>
                <img className="categoryImage" src='./images/travel.jpg' alt="alt-desc"/>
                    <Typography className="categoryText" variant='body1'><Link to='categorySearch?category=travel' style={{textDecoration:"none",color:'black'}}>travel</Link></Typography>
                </Paper>

                <Paper elevation={3} className='categoryItem' sx={{backgroundColor:'whitesmoke'}}>
                <img className="categoryImage" src='./images/mobiles.webp' alt="alt-desc"/>
                    <Typography className="categoryText" variant='body1'><Link to='categorySearch?category=mobiles' style={{textDecoration:"none",color:'black'}}>mobiles</Link></Typography>
                </Paper>

                <Paper elevation={3} className='categoryItem' sx={{backgroundColor:'whitesmoke'}}>
                <img className="categoryImage" src='./images/furnitures.jpg' alt="alt-desc"/>
                    <Typography className="categoryText" variant='body1'><Link to='categorySearch?category=furniture' style={{textDecoration:"none",color:'black'}}>furniture</Link></Typography>
                </Paper>

                <Paper elevation={3} className='categoryItem' sx={{backgroundColor:'whitesmoke'}}>
                <img className="categoryImage" src='./images/beauty.jpg' alt="alt-desc"/>
                    <Typography className="categoryText" variant='body1'><Link to='categorySearch?category=beauty' style={{textDecoration:"none",color:'black'}}>beauty</Link></Typography>
                </Paper>

            </Paper>

           
            <CarouselComponent />
            <hr style={{width:"60%",paddingLeft:"5%",height:'1vmax',marginLeft:'20%'}}/>
            <h1 style={{textAlign:'center'}}>featured products</h1>
            <hr style={{width:"60%",paddingLeft:"5%",height:'1vmax',marginLeft:'20%'}}/>
            
            <Home1 />
    </div>
  )
}

export default Home
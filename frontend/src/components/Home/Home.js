import React from 'react';
import CarouselComponent from '../Carousel';
import Home1 from './Home1';
import './Home1.css';
import { Button, IconButton, Typography, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Home() {
  return (
    <div className='Appbar'>
<Paper elevation={0} sx={{ display: 'flex', height: '100px', alignItems: 'center', justifyContent: 'center',paddingTop:'20px' }}>
                <Paper elevation={0} className='categoryItem'>
                <img className="categoryImage" src='./images/electronics.jpg' alt="alt-desc"/>
                    <Typography className="categoryText" variant='body1'>electronics</Typography>
                </Paper>

                <Paper elevation={0} className='categoryItem'>
                <img className="categoryImage" src='./images/fashion.webp' alt="alt-desc"/>
                    <Typography className="categoryText" variant='body1'>fashion</Typography>
                </Paper>

                <Paper elevation={0} className='categoryItem'>
                <img className="categoryImage" src='./images/grocery.webp' alt="alt-desc"/>
                    <Typography className="categoryText" variant='body1'>grocery</Typography>
                </Paper>

                <Paper elevation={0} className='categoryItem'>
                <img className="categoryImage" src='./images/travel.jpg' alt="alt-desc"/>
                    <Typography className="categoryText" variant='body1'>travel</Typography>
                </Paper>

                <Paper elevation={0} className='categoryItem'>
                <img className="categoryImage" src='./images/mobiles.webp' alt="alt-desc"/>
                    <Typography className="categoryText" variant='body1'>mobiles</Typography>
                </Paper>

                <Paper elevation={0} className='categoryItem'>
                <img className="categoryImage" src='./images/furnitures.jpg' alt="alt-desc"/>
                    <Typography className="categoryText" variant='body1'>furniture</Typography>
                </Paper>

                <Paper elevation={0} className='categoryItem'>
                <img className="categoryImage" src='./images/beauty.jpg' alt="alt-desc"/>
                    <Typography className="categoryText" variant='body1'>beauty</Typography>
                </Paper>

            </Paper>

            <Paper elevation={0} sx={{ display: 'flex', height: '40px', alignItems: 'center', justifyContent: 'center', margin: '3%'}}>
                <TextField
                label="search here..."
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    sx={{width:'50%'}}
                /><IconButton><SearchIcon fontSize='large' /></IconButton>
            </Paper>
            <CarouselComponent />
            <h1 style={{textAlign:'center'}}>featured products</h1>
            <Home1 />
    </div>
  )
}

export default Home
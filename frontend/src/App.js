import React from 'react';
// import './App.css';

import CarouselComponent from './components/Carousel';


import {Outlet} from 'react-router-dom';
import Header from './components/Header/Header';



function App() {

    

   
    
    return (
        <>
        <Header />
          <Outlet />
         </>
    )
}

export default App
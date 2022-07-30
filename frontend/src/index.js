import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import LoginSignUp from './components/LoginSignUp/loginSignUp';
import Home from './components/Home/Home';
import Dashboard from './components/Admin/Dashboard';
import AddProduct from './components/Admin/AddProduct';
import DefaultBody from './components/Admin/DefaultBody';
import EditProduct from './components/Admin/EditProduct'
import ProductDetails from './components/ProductDetails/ProductDetails';
import SearchResult from './components/SearchResult/SearchResult'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
     <Provider store={store}>
          <Routes>
               <Route path='/' element={<App/>}>
               <Route path='/login' element={<LoginSignUp/>} />   
               <Route index element={<Home/>} />
               <Route path=':id' element={<ProductDetails/>} />
               <Route path='search/:keyword' element={<SearchResult />} />             
               </Route>
               <Route path='admin' element={<Dashboard/>} >
               <Route index element={<DefaultBody />} />
               <Route path='addProduct' element={<AddProduct />} />
               <Route path=':id' element={<EditProduct />} />
               </Route>
               
               
          </Routes>
     </Provider>
</BrowserRouter>
);
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { CookiesProvider } from "react-cookie";
import store from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignUp from './components/LoginSignUp/loginSignUp';
import Home from './components/Home/Home';
import Dashboard from './components/Admin/Dashboard';
import AddProduct from './components/Admin/AddProduct';
import DefaultBody from './components/Admin/DefaultBody';
import EditProduct from './components/Admin/EditProduct'
import ProductDetails from './components/ProductDetails/ProductDetails';
import SearchResult from './components/SearchResult/SearchResult'
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import ProtectedRoute from './components/Route/ProtectedRoute';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import Shipping from './components/Cart/Shipping';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <BrowserRouter>
          <Provider store={store}>
               <CookiesProvider>
                    <Routes>
                         <Route path='/' element={<App />}>
                              <Route path='/login' element={<LoginSignUp />} />
                              <Route path='cart' element={<Cart />} />

                              <Route path="profile" element={<ProtectedRoute isAdmin={false}><Profile /> </ProtectedRoute>} />
                              <Route path="updateProfile" element={<ProtectedRoute isAdmin={false}><UpdateProfile /></ProtectedRoute>} />

                              <Route path='admin' element={<ProtectedRoute isAdmin={true}><Dashboard /></ProtectedRoute>}>
                                   <Route index element={<ProtectedRoute isAdmin={true}><DefaultBody /> </ProtectedRoute>} />
                                   <Route path='addProduct' element={<ProtectedRoute isAdmin={true}><AddProduct /> </ProtectedRoute>} />
                                   <Route path=':id' element={<ProtectedRoute isAdmin={true}><EditProduct /></ProtectedRoute>} />
                              </Route>

                              <Route path='shipping' element={<ProtectedRoute isAdmin={false}><Shipping /></ProtectedRoute>}/>

                              <Route index element={<Home />} />
                              <Route path=':id' element={<ProductDetails />} />
                              <Route path='search/:keyword' element={<SearchResult />} />
                         </Route>

                         {/* <Route path='admin' element={<ProtectedRoute isAdmin={true}><Dashboard/></ProtectedRoute>}>
                         <Route index element={<ProtectedRoute isAdmin={true}><DefaultBody /> </ProtectedRoute>} />
                         <Route path='addProduct' element={<ProtectedRoute isAdmin={true}><AddProduct /> </ProtectedRoute>} />
                         <Route path=':id' element={<ProtectedRoute isAdmin={true}><EditProduct /></ProtectedRoute>} />
                        
                         </Route> */}

{/* <Route path='shipping' element={<Shipping />}/> */}


                    </Routes>
               </CookiesProvider>
          </Provider>
     </BrowserRouter>
);
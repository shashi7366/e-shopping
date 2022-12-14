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
import ConfirmOrder from './components/Cart/ConfirmOrder';
import Payment from './components/Cart/Payment';
import PaymentWrapper from './components/Cart/PaymentWrapper';
import OrderSuccess from './components/Cart/OrderSuccess';
import ViewOrders from './components/Admin/ViewOrders';
import OrderDetails from './components/Admin/OrderDetails';
import CategorySearch from './components/CategorySearch/CategorySearch';

import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ResetPassword from './components/ForgotPassword/ResetPassword';
import ChangePassword from './components/ForgotPassword/ChangePassword';

import MyOrder from './components/Order/MyOrder';
import OrderDetailsUser from './components/Order/OrderDetailsUser';
import AddReview from './components/AddReview/AddReview';
import SimpleDialogDemo from './components/navbar/navbar';





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
                                   <Route path='orders' element={<ProtectedRoute isAdmin={true}><ViewOrders /></ProtectedRoute>} />
                                   <Route path='orders/order/:id' element={<ProtectedRoute isAdmin={true}><OrderDetails/></ProtectedRoute>} />
                              </Route>
                              <Route path='success' element={<OrderSuccess/>}/>
          //myorders route
                              <Route path='orders' element={<MyOrder/>}/>
                              {/* <Routes> */}
          //orderDetails user
                              <Route path='order/:id' element={<OrderDetailsUser/>}/>
                              <Route path='order/confirm' element={<ConfirmOrder/>}/>
                              {/* </Routes>                          */}
                              <Route path='shipping' element={<ProtectedRoute isAdmin={false}><Shipping /></ProtectedRoute>}/>
                              <Route path='process/payment' element={<PaymentWrapper/>}/>
                              <Route index element={<Home />} />
                              <Route path=':id' element={<ProductDetails />} />
                              <Route path='search' element={<SearchResult />} />
                              <Route path='categorySearch' element={<CategorySearch />} />
                              <Route path='password/forgot' element={<ForgotPassword/>}/>
                              <Route path='password/reset/:token' element={<ResetPassword/>}/>
                              <Route path='password/update' element={<ChangePassword/>}/>
                              <Route path='addReview/:id' element={<AddReview/>}/>
                         </Route>

                         {/* <Route path='admin' element={<ProtectedRoute isAdmin={true}><Dashboard/></ProtectedRoute>}>
                         <Route index element={<ProtectedRoute isAdmin={true}><DefaultBody /> </ProtectedRoute>} />
                         <Route path='addProduct' element={<ProtectedRoute isAdmin={true}><AddProduct /> </ProtectedRoute>} />
                         <Route path=':id' element={<ProtectedRoute isAdmin={true}><EditProduct /></ProtectedRoute>} />
                        
                         </Route> */}

{/* <Route path='shipping' element={<Shipping/>}/> */}

{/* <Elements stripe={loadStripe(stripeApiKey)}> <Route path= 'process/payment'element={<Payment/>}/> </Elements> */}
<Route path="navbar" element={<SimpleDialogDemo/>}/>
                    </Routes>
               </CookiesProvider>
          </Provider>
     </BrowserRouter>
);
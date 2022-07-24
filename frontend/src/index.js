import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Routes,Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
     <Provider store={store}>
          <Routes>
               <Route path='/' element={<App/>}>
               </Route>
          </Routes>
     </Provider>
</BrowserRouter>
);
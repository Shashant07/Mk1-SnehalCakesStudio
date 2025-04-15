import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';

import 'bootstrap/dist/js/bootstrap.min.js';

import App from './App';

import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import FAQ from './components/FAQ';
import Policy from './components/Policy';
import TandC from './components/TandC';

import HomeScreen from './screens/HomeScreen';
import SearchResult from './screens/SearchResult';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import CartScreen from './screens/CartScreen';
import AboutScreen from './screens/AboutScreen';
import AllProductsScreen from './screens/AllProductsScreen';
import ProductScreen from './screens/ProductScreen';
import MessageScreen from './screens/MessageScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';

// admin imports
import MessageListScreen from './screens/admin/MessageListScreen';
import OrderListScreen from './screens/admin/OrderListScreen';
import ProductEditScreen from './screens/admin/ProductEditScreen';
import ProductListScreen from './screens/admin/ProductListScreen';
import UserEditScreen from './screens/admin/UserEditScreen';
import UserListScreen from './screens/admin/UserListScreen';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/search/:keyword' element={<SearchResult />}/>
      <Route path='/page/:pageNumber' element={<HomeScreen />} />
      <Route
        path='/search/:keyword/page/:pageNumber'
        element={<AllProductsScreen />}
      />
      <Route path='/products' element={<AllProductsScreen />} />
      <Route path='/product/:id' element={<ProductScreen />} />
      <Route path='/cart' element={<CartScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='/messages' element={<MessageScreen />} />
      <Route path='/about' element={<AboutScreen />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/tandc' element={<TandC />} />
      <Route path='/policy' element={<Policy />} />
      {/* <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/careers' element={<Careers />} /> */}

      {/* Registered users */}
      <Route path='' element={<PrivateRoute />}>
        <Route path='/shipping' element={<ShippingScreen />} />
        <Route path='/payment' element={<PaymentScreen />} />
        <Route path='/placeorder' element={<PlaceOrderScreen />} />
        <Route path='/order/:id' element={<OrderScreen />} />
        <Route path='/profile' element={<ProfileScreen />} />
      </Route>

      {/* Admin users */}
      <Route path='' element={<AdminRoute />}>
        <Route path='/admin/messagelist' element={<MessageListScreen />} />
        <Route path='/admin/orderlist' element={<OrderListScreen />} />
        <Route path='/admin/productlist' element={<ProductListScreen />} />
        <Route path='/admin/productlist/:pageNumber' element={<ProductListScreen />}/>
        <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />
        <Route path='/admin/userlist' element={<UserListScreen />} />
        <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
      </Route>
    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import { productCreateReducer, productDeleteReducer, productDetailsReducer, productListReducer, productReviewCreateReducer, productTopRatedReducer, productUpdateReducer } from "./Reducer/productReducers";
import { cartReducer } from "./Reducer/cartReducers";
import { userDeleteReducer, userDetailsReducer, userListReducer , userLoginreducer, userRegisterReducer, userUpdateProfileReducer, userUpdateReducer } from "./Reducer/userReducer";
import { orderCreateReducer, orderDeliverReducer, orderDetailsReducer, orderListMyReducer, orderListReducer, orderPayReducer, } from "./Reducer/orderReducers";



const reducer = combineReducers({
 productList : productListReducer,
 productDetails : productDetailsReducer,
 productReviewCreate: productReviewCreateReducer,
 cart:cartReducer ,
 userLogin :  userLoginreducer,
 userRegister : userRegisterReducer,
 userDetails : userDetailsReducer,
 userUpdateProfile: userUpdateProfileReducer,
 orderCreate : orderCreateReducer,
 orderDetails: orderDetailsReducer,
 orderListMy : orderListMyReducer,
 orderPay : orderPayReducer,
 userList : userListReducer,
 userDelete: userDeleteReducer,
 userUpdate : userUpdateReducer,
 productDelete: productDeleteReducer,
 productCreate: productCreateReducer,
 productUpdate: productUpdateReducer,
 orderList: orderListReducer,
 orderDeliver: orderDeliverReducer,
 productTopRated:productTopRatedReducer,
});


const cartItemsFromStorage = localStorage.getItem('cartItems')?
JSON.parse(localStorage.getItem('cartItems')):[]

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressfromStorage = localStorage.getItem('shippingAddress') ? 
  JSON.parse(localStorage.getItem('shippingAddress')) : {};

const middleware = [thunk];

const initialState={
  cart:{
    cartItems:cartItemsFromStorage,
    shippingAddress : shippingAddressfromStorage,
  },

  userLogin: {
    userInfo: userInfoFromStorage,
  },
}



const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

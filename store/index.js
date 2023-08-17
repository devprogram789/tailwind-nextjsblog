import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './filterSlice';
import swLanguage from './swLanguage';
import footerData from './footerData';
// import wishlistReducer from './wishlistSlice';
// import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    language: swLanguage,
    footer: footerData
    //wishlist: wishlistReducer,
    //cart: cartReducer,
  },
});

export default store;

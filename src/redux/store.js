import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactReducer from 'redux/contactSlise';
import filterReducer from 'redux/filterSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store); 

export default store;




// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import contactReducer from 'redux/contactSlise';
// import filterReducer from 'redux/filterSlice'

// export const store = configureStore({
//   reducer: {
//     contacts: contactReducer,
//     filter: filterReducer,
//   },
//   middleware: getDefaultMiddleware({
//     serializableCheck: false,
//   }),
// });

// export default store;
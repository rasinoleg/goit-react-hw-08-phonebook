import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tasksReducer } from './tasks/slice';
import { authReducer } from './auth/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    tasks: tasksReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);




// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// // import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import contactReducer from 'redux/contactSlise';
// import filterReducer from 'redux/filterSlice';
// import { authReducer } from './auth/slice'

// const authPersistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['token'],
// };

// const persistedReducer = persistReducer( authPersistConfig, contactReducer);

// export const store = configureStore({
//   reducer: {
//     contacts: persistedReducer(authPersistConfig, authReducer),
//     filter: filterReducer,
//   },
//   middleware: getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });

// export const persistor = persistStore(store); 

// export default store;




// // import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// // import contactReducer from 'redux/contactSlise';
// // import filterReducer from 'redux/filterSlice'

// // export const store = configureStore({
// //   reducer: {
// //     contacts: contactReducer,
// //     filter: filterReducer,
// //   },
// //   middleware: getDefaultMiddleware({
// //     serializableCheck: false,
// //   }),
// // });

// // export default store;
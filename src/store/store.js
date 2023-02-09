import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './cantacts/contactsSlice';
import { filterSlice } from './filter/filterSlice';

// const rootReducer = combineReducers({
//   users: usersSlice.reducer,
//   filter: filterSlice.reducer,
// });

export const store = configureStore({
  reducer: {
    contacts: usersSlice.reducer,
    filter: filterSlice.reducer,
  },
});

// export const persistor = persistStore(store);

// !!!!!!!!!!!!!!!!!!!!!!!
// const persistedReducer = persistReducer(persistConfig, newReducer);

// export const store = configureStore({
//   reducer: {
//     users: persistedReducer,
//     firstReducer: usersSlice,
//     secondReducer: neUserSlice,
//   },
// });

// const newReducer = combineReducers({
//   thirdReducer: neUserSlice1,
//   forthReducer: neUserSlice2,
// })

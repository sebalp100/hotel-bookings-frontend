import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authLog } from '../api/authLog';
import { roomsApi } from '../api/roomsData';

const store = configureStore({
  reducer: {
    [authLog.reducerPath]: authLog.reducer,
    [roomsApi.reducerPath]: roomsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(authLog.middleware)
    .concat(roomsApi.middleware),
});

setupListeners(store.dispatch);

export default store;

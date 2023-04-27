import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authLog } from '../api/authLog';
import { roomsApi } from '../api/roomsData';
import { roomData } from '../api/detail';

const store = configureStore({
  reducer: {
    [authLog.reducerPath]: authLog.reducer,
    [roomsApi.reducerPath]: roomsApi.reducer,
    [roomData.reducerPath]: roomData.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(authLog.middleware)
    .concat(roomsApi.middleware)
    .concat(roomData.middleware),
});

setupListeners(store.dispatch);

export default store;

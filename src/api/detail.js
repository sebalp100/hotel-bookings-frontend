import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const roomData = createApi({
  reducerPath: 'roomData',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getRoomData: builder.query({
      query: (id) => `/rooms/${id}`,
    }),
  }),
});
export const { useGetRoomDataQuery } = roomData;

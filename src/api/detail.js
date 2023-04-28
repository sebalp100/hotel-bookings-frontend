import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const roomData = createApi({
  reducerPath: 'roomData',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getRoomData: builder.query({
      query: (id) => `/rooms/${id}`,
    }),
    createReservation: builder.mutation({
      query: ({ city, room_id, user_id, date }) => ({
        url: '/reservations',
        method: 'POST',
        body: { room_name, city, room_id, user_id, date },
      }),
    }),
  }),
});

export const { useGetRoomDataQuery, useCreateReservationMutation } = roomData;

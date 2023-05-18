import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reservationsData = createApi({
  reducerPath: 'reservationsData',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rails-production-68eb.up.railway.app/', credentials: 'include' }),
  endpoints: (builder) => ({
    getReservations: builder.query({
      query: () => '/reservations',
      providesTags: ['Reservations'],
    }),
    deleteReservation: builder.mutation({
      query: (roomId) => ({
        url: `/reservations/${roomId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Reservations'],
    }),
  }),
});

export const { useGetReservationsQuery, useDeleteReservationMutation } = reservationsData;

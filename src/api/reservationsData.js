import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reservationsData = createApi({
  reducerPath: 'reservationsData',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mysite-1cmz.onrender.com/:5432/', credentials: 'include' }),
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

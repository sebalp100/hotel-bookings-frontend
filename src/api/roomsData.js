import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const roomsApi = createApi({
  reducerPath: 'roomsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getRoomsDetails: builder.query({
      query: () => '/rooms',
      providesTags: ['Rooms'],
    }),
    createRoom: builder.mutation({
      query: (room) => ({
        url: '/rooms',
        method: 'POST',
        body: room,
      }),
      invalidatesTags: ['Rooms'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRoomsDetailsQuery } = roomsApi;
export const { useCreateRoomMutation } = roomsApi;

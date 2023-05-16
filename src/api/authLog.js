import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authLog = createApi({
  reducerPath: 'authLog',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mysite-1cmz.onrender.com/',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `sessionCookie=${document.cookie}`,
    },
  }),
  endpoints: (builder) => ({
    currentUser: builder.query({
      query: () => '/current_user',
      providesTags: ['User'],
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
        invalidatesTags: ['User'],
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Cookie: `sessionCookie=${document.cookie}`,
        },
        invalidatesTags: ['Reservations'],
      }),
    }),
  }),
});

export const { useCurrentUserQuery, useLoginMutation, useLogoutMutation } = authLog;

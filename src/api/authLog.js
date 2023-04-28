import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authLog = createApi({
  reducerPath: 'authLog',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/', credentials: 'include' }),
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
      }),
    }),
  }),
});

export const { useCurrentUserQuery, useLoginMutation, useLogoutMutation } = authLog;

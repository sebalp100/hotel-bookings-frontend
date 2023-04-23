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
  }),
});

export const { useCurrentUserQuery, useLoginMutation } = authLog;

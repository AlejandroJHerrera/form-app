import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000',
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getForms: builder.query({
      query: () => '/form/allForms',
    }),
    searchUserForms: builder.mutation({
      query: (technicianID) => ({
        url: '/form/findTech',
        method: 'POST',
        body: technicianID,
      }),
    }),
  }),
});
export const { useGetFormsQuery, useSearchUserFormsMutation } = apiSlice;

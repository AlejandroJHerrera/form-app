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
    getAllAdmins: builder.query({
      query: () => '/user/allAdmins',
    }),
    /* This query searches for all tech under the same admin by its Name */
    searchAdminTechs: builder.mutation({
      query: (Admin) => ({
        url: '/user/techs',
        method: 'POST',
        body: Admin,
      }),
    }),
  }),
});
export const {
  useGetFormsQuery,
  useSearchUserFormsMutation,
  useSearchAdminTechsMutation,
} = apiSlice;

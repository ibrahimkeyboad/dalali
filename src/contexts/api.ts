import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import type { Pokemon } from './types'
import { baseUrl } from '@/actions/url';

// Define a service using a base URL and expected endpoints
export const locationApi = createApi({
  reducerPath: 'locationApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['Location'],
  endpoints: (builder) => ({
    getCountry: builder.query({
      query: (_) => `location`,
      providesTags: ['Location'],
    }),
    getCountryCities: builder.query({
      query: (country) => `location/city/${country}`,
      providesTags: ['Location'],
    }),
  }),
});

export const { useGetCountryCitiesQuery, useGetCountryQuery } = locationApi;

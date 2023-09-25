import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const bikesApi = createApi({
    reducerPath: 'bikesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://bikes.cyclic.app/bikes'}),
    endpoints: (builder) => ({
        getBikes: builder.query({
            query: ()=> "/all"
        }),
    }),
})

export const { useGetBikesQuery } = bikesApi;
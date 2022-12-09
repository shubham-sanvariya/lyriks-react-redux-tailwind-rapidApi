import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export  const  shazamCoreApi  = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            
            headers.set('X-RapidAPI-Key','7ba9c2a82emshf4ae22d7c3e0426p1a9d99jsn94010ccb3e7f')

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world'}),
    }),
});

export const  {useGetTopChartsQuery}  =  shazamCoreApi
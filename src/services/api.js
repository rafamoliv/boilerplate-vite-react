import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
    prepareHeaders(headers) {
      return headers
    }
  }),
  endpoints(builder) {
    return {
      fetchRepos: builder.query({
        query() {
          return 'users/Yoonit-Labs/repos'
        }
      })
    }
  }
})

export const { useFetchReposQuery } = api

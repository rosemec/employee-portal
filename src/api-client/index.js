import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => 'employee',
    }),
    addNewEmployee: builder.mutation({
        query: empData => ({
          url: 'employee',
          method: 'POST',
          // Include the entire post object as the body of the request
          body: empData
        })
    })
  }),
})
console.log(employeeApi)

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEmployeesQuery, useAddNewEmployeeMutation } = employeeApi
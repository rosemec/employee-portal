import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => 'employee',
      providesTags: ['employee']
    }),
    addNewEmployee: builder.mutation({
        query: empData => ({
          url: 'employee',
          method: 'POST',
          // Include the entire post object as the body of the request
          body: empData
        }),
        invalidatesTags: ['employee']
    }),
    getEmployee: builder.query({
      query: id => `employee/${id}`,
      providesTags: ['singleEmployee']
    }),
    deleteEmployee: builder.mutation({
      query: id => ({
        url: `employee/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['employee']
  }),
  updateEmployee: builder.mutation({
    query: ({empData, id}) => ({
      url: `employee/${id}`,
      method: 'PUT',
      // Include the entire post object as the body of the request
      body: empData
    }),
    invalidatesTags: ['employee', 'singleEmployee']
}),
})
})
console.log(employeeApi)

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEmployeesQuery, useAddNewEmployeeMutation, useDeleteEmployeeMutation, useGetEmployeeQuery, useUpdateEmployeeMutation } = employeeApi
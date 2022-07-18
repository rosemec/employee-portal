import { configureStore } from '@reduxjs/toolkit'
import { employeeApi } from '../api-client'
import employeesReducer from '../features/employees/employeeSlice'

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    [employeeApi.reducerPath]: employeeApi.reducer,
  },
})
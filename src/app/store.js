import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { employeeApi } from '../api-client'
import employeesReducer from '../features/employees/employeeSlice'

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    [employeeApi.reducerPath]: employeeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(employeeApi.middleware),
})

setupListeners(store.dispatch)
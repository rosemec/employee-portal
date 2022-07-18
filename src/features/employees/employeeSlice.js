import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  empList: []
}

export const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    append: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.empList.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = employeeSlice.actions

export default employeeSlice.reducer
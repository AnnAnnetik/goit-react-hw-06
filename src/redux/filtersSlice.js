import { createSlice } from '@reduxjs/toolkit';
const INITIAL_STATE = {
  filters: {
    name: '',
  },
};
const filtersSlice = createSlice({
  name: 'filter',
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter: (state, action) => action.payload,
  },
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;

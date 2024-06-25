import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: "",
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState.filters,
  selectors: { selectFilters: (state) => state.name },
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setFilter } = filtersSlice.actions;
export const { selectFilters } = filtersSlice.selectors;

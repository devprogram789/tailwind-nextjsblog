import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    brands: [],
    categories: [],
    amount: [],
    color: [],
    transmissionType: [],
    odometerReading: [],
    year: [],
    model: [],
    pricesort: 'default',
    sort: 'default',
  },
  reducers: {
    selectBrand(state, action) {
      state.brands.push(action.payload)
    },
    deselectBrand(state, action) {
      state.brands = state.brands.filter((value) => value !== action.payload)
    },
    selectCategory(state, action) {
      state.categories.push(action.payload)
    },
    deselectCategory(state, action) {
      state.categories = state.categories.filter((value) => value !== action.payload)
    },

    selectMoney(state, action) {
      state.amount.push(action.payload)
    },
    deselectMoney(state, action) {
      state.amount = state.amount.filter((value) => value !== action.payload)
    },
    selectColor(state, action) {
      state.color.push(action.payload)
    },
    deselectColor(state, action) {
      state.color = state.color.filter((value) => value !== action.payload)
    },
    selectTransmissionType(state, action) {
      state.transmissionType.push(action.payload)
    },
    deselectTransmissionType(state, action) {
      state.transmissionType = state.transmissionType.filter((value) => value !== action.payload)
    },
    selectOdometerReading(state, action) {
      state.odometerReading.push(action.payload)
    },
    deselectOdometerReading(state, action) {
      state.odometerReading = state.odometerReading.filter((value) => value !== action.payload)
    },
    selectYear(state, action) {
      state.year.push(action.payload)
    },
    deselectYear(state, action) {
      state.year = state.year.filter((value) => value !== action.payload)
    },
    selectModel(state, action) {
      state.model.push(action.payload)
    },
    deselectModel(state, action) {
      state.model = state.model.filter((value) => value !== action.payload)
    },

    choosePriceSort(state, action) {
      state.sort = action.payload
    },
    chooseSort(state, action) {
      state.sort = action.payload
    },
  },
})

export const filterActions = filterSlice.actions

export default filterSlice.reducer

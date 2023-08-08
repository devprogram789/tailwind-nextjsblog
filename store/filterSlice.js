import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    type: [],
    product: [],
    district: [],
    // color: [],
    // transmissionType: [],
    // odometerReading: [],
    // year: [],
    // model: [],
    // pricesort: 'default',
    // sort: 'default',
  },
  reducers: {
    selectType(state, action) {
      state.type.push(action.payload)
    },
    deselectType(state, action) {
      state.type = state.type.filter((value) => value !== action.payload)
    },


    selectProduct(state, action) {
      state.product.push(action.payload)
    },
    deselectProduct(state, action) {
      state.product = state.product.filter((value) => value !== action.payload)
    },


    selectDistrict(state, action) {
      state.district.push(action.payload)
    },
    deselectDistrict(state, action) {
      state.district = state.district.filter((value) => value !== action.payload)
    },


    // selectColor(state, action) {
    //   state.color.push(action.payload)
    // },
    // deselectColor(state, action) {
    //   state.color = state.color.filter((value) => value !== action.payload)
    // },
    // selectTransmissionType(state, action) {
    //   state.transmissionType.push(action.payload)
    // },
    // deselectTransmissionType(state, action) {
    //   state.transmissionType = state.transmissionType.filter((value) => value !== action.payload)
    // },
    // selectOdometerReading(state, action) {
    //   state.odometerReading.push(action.payload)
    // },
    // deselectOdometerReading(state, action) {
    //   state.odometerReading = state.odometerReading.filter((value) => value !== action.payload)
    // },
    // selectYear(state, action) {
    //   state.year.push(action.payload)
    // },
    // deselectYear(state, action) {
    //   state.year = state.year.filter((value) => value !== action.payload)
    // },
    // selectModel(state, action) {
    //   state.model.push(action.payload)
    // },
    // deselectModel(state, action) {
    //   state.model = state.model.filter((value) => value !== action.payload)
    // },

    // choosePriceSort(state, action) {
    //   state.sort = action.payload
    // },
    // chooseSort(state, action) {
    //   state.sort = action.payload
    // },
  },
})

export const filterActions = filterSlice.actions

export default filterSlice.reducer

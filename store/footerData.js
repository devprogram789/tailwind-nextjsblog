import { createSlice } from '@reduxjs/toolkit';

const FooterData = createSlice({
  name: 'footer',
  initialState: {
    footer: null,
  },
  reducers: {
    setfooterData(state, action) {
      state.footer = action.payload;
    },
  },
});



export const footerActions = FooterData.actions;

export default FooterData.reducer;

import { createSlice } from '@reduxjs/toolkit';

const swLanguage = createSlice({
  name: 'language',
  initialState: {
    Language: null,
  },
  reducers: {
    setLanguage(state, action) {
      state.Language = action.payload;
    },
  },
});



export const LanguageActions = swLanguage.actions;

export default swLanguage.reducer;

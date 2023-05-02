import { createSlice } from '@reduxjs/toolkit';

const photoSlice = createSlice({
  name: 'photos',
  initialState: {
    image: [],
  },
  reducers: {
    addImage(state, action) {
      state.image = [URL.createObjectURL(action.payload), ...state.image];
    },
  },
});

export const { addImage } = photoSlice.actions;
export default photoSlice.reducer;

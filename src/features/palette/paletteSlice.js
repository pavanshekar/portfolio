import { createSlice } from '@reduxjs/toolkit';

const paletteSlice = createSlice({
  name: 'palette',
  initialState: { open: false },
  reducers: {
    openPalette(state) {
      state.open = true;
    },
    closePalette(state) {
      state.open = false;
    },
    togglePalette(state) {
      state.open = !state.open;
    },
  },
});

export const { openPalette, closePalette, togglePalette } =
  paletteSlice.actions;
export default paletteSlice.reducer;

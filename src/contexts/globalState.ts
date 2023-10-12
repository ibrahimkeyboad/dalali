'use client';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ModalState {
  modalValue: boolean;
}

const initialState: ModalState = {
  modalValue: false,
};

export const counterSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    modalToggle: (state) => {
      state.modalValue = !state.modalValue;
    },
  },
});

// Action creators are generated for each case reducer function
export const { modalToggle } = counterSlice.actions;

export default counterSlice.reducer;

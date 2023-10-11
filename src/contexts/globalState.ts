import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  modalValue: boolean;
}

const initialState: CounterState = {
  modalValue: false,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    ModalToggle: (state) => {
      state.modalValue = !state.modalValue;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ModalToggle } = counterSlice.actions;

export default counterSlice.reducer;

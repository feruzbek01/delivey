import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'uislice',
    initialState: { isOpen: false },
    
    reducers: {
        toggle(state) {
            state.isOpen = !state.isOpen;
        }
    }
})

export const { toggle } = uiSlice.actions
export default uiSlice.reducer
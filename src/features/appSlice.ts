import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  url: string;
  apiKey: string;
  inputText: string;
}

const initialState: AppState = {
  url: "https://api.openweathermap.org/data/2.5/weather",
  apiKey: "",
  inputText: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setApiKey: (state, action: PayloadAction<string>) => {
      state.apiKey = action.payload;
    },
    setInputText: (state, action: PayloadAction<string>) => {
      state.inputText = action.payload;
    },
  },
});

export const { setApiKey, setInputText } = appSlice.actions;
export default appSlice.reducer;

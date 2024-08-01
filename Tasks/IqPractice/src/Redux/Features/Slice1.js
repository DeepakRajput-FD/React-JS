import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchData = createAsyncThunk("FetchData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    return await response.json();
});

const slice1 = createSlice({
  name: "Data1",
  initialState: {Data:[],isLoading:false},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchData.fulfilled, (state, action) => 
      {
        state.Data=action.payload
      })
      builder.addCase(FetchData.pending,(state,action)=>{
        state.isLoading=true;
      })
  },
});
export default slice1.reducer;

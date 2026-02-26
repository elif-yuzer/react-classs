import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("haberSlice/getData", async () => {
  const res = await axios(
    "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=81a4163ea7eb4bccb489151972100adb",
  );

  console.log(res.data.articles);
  return res.data.articles;
});

const haberSlice = createSlice({
  name: "haberSlice",

  initialState: {
    haberler: [],
    loading: true,
    error: false,
  },
  reducers: {
    clear: (state, { payload }) => {
      state.haberler = state.haberler.filter((a) => a.url !== payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.haberler = action.payload;
        state.loading = false;
      })
      .addCase(getData.rejected, (state) => {
       state.error=true
       state.loading=false
      });
  },
});

export const { clear } = haberSlice.actions;

export default haberSlice.reducer;

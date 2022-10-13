import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; //создам редюсер.createAsyncThunk-асинхронную добавила

//создала асинхронный запрос

const initialState = {
  //список статей
  posts: {
    items: [],
    status: "loading",
  },
  tags: {
    items: [],
    status: "loading",
  },
};

const postsSlice = createSlice({
  //получает
  name: "posts",
  initialState,
  reducer: {}, //пишу редюсер и тут методы обновляющие мой state
});

export const postsReducer = postsSlice.reducer;
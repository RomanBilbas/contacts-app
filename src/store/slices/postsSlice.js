import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '../../api';

const initialState = {
  posts: [],
  isFetching: false,
  error: null,
};

export const getPostsThunk = createAsyncThunk(
  'posts/getPosts',
  async (payload, thunkAPI) => {
    try {
      const { data } = await API.getPosts();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ message: err.message });
    }
  }
);

const postsSlice = createSlice({
  initialState,
  name: 'posts',
  reducers: {},
  extraReducers: bulder => {
    bulder.addCase(getPostsThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    bulder.addCase(getPostsThunk.fulfilled, (state, { payload }) => {
      state.posts = payload;
      state.isFetching = null;
    });
    bulder.addCase(getPostsThunk.error, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducer, actions } = postsSlice;

// const {} = actions;

export default reducer;

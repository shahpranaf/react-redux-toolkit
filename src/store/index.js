import { configureStore, createAction } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";

const reset = createAction("app/reset");

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  }
});

export { store, reset, addSong, removeSong, addMovie, removeMovie };

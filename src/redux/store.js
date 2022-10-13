import {configureStore} from '@reduxjs/toolkit';
import { postsReducer } from './slices/posts';

//создаю редакторское хранилище
const store = configureStore({
reducer:{
    posts: postsReducer
},
})


export default store;
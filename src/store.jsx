import {configureStore} from '@reduxjs/toolkit';
import movieReducer from './redux/reducers/movieReducer';

export const store = configureStore({
    reducer : {
        movie : movieReducer,
    },
});




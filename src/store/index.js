import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

import navSlice from "./storee/navSlice";
import rideSlice from "./storee/rideSlice";


export const store = configureStore({
  reducer: {
    nav: navSlice,
    ride: rideSlice
  },
});

  RootState = store.getState;
  AppDispatch =  store.dispatch;
export const useAppDispatch = () => AppDispatch = useDispatch;
export const useAppSelector = useSelector;

export default store;
import { configureStore } from "@reduxjs/toolkit";
import markerReducer from '../features/mapSlice';

export default function store() {
	return configureStore({ 
		reducer: { markers: markerReducer }
	})
}
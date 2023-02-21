import { createSlice } from "@reduxjs/toolkit"
import { locations } from "../data/locations"
export const mapSlice = createSlice({
	name: 'map',
	initialState: { 
		markers: locations,
		activeMarkerInfo: null
	},
	reducers: {
		// For adding markers
		setMarker: (state, action) => {
			const newMarker = {
				position: {lat: action.payload.lat, lng: action.payload.lng},
				label: { text: action.payload.text}
			}
			state.markers = [...state.markers, newMarker]
		},
		deleteMarker: (state, action) => {
			const markerIndex = action.payload;
			let updatedMarkers = state.markers.slice();
			updatedMarkers.splice(markerIndex, 1);

			state.markers = updatedMarkers;
			state.activeInfoWindow = -1;
		}
	}
})
export const { setMarker, deleteMarker } = mapSlice.actions;
export const selectMarkers = state => state.markers.markers;
export const selectMarkerInfo = state => state.markers.activeMarkerInfo;
export default mapSlice.reducer;
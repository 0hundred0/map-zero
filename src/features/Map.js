import { averageLatitude, averageLongitude } from '../data/locations';
import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";
import { selectMarkers } from './mapSlice';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const containerStyle = {width: "100%", height: "80vh", margin: '10vh auto', maxWidth: '975px'}

// Averaged numbers so that is in the middle of all locations
const center = {lat: averageLatitude(), lng: averageLongitude()}
// Insert Google Maps API Key
const apiKey = ''

const Map = () => {
	const markerLabels = ['Plot', "ID", "Agent", "Secret Base", "Hidden Treasure"];
	const [activeMarker, setActiveMarker] = useState('');
	const [currentLabel, setCurrentLabel] = useState(markerLabels[0])
	// Marker state from redux store
	const markers = useSelector(selectMarkers);

	// Create puller (every 1 sec) to this route that gets information about markers.
	useEffect(() => {
		const interval = setInterval(() => {
			const randomLabel = Math.floor(Math.random() * markerLabels.length)
			setCurrentLabel(markerLabels[randomLabel])
		}, 1000)
		return () => clearInterval(interval);
	})

	const markerClicked = (marker, index) => {  
        setActiveMarker(index)
        console.log(activeMarker, marker) 
    }

  return (
	<LoadScript googleMapsApiKey={apiKey}>

		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
			{/* Maps out pins based on locations found in the data folder */}
			{markers.map((marker, index) => (
				<Marker 
					key={index} 
					icon={{ url: (require('../assets/favicon.ico')), fillColor: 'fb3e44', scale: 7 }}
					position={{ lat: marker.latitude, lng: marker.longitude }}
					draggable={marker.draggable}
					onClick={() => markerClicked(marker, index)} 
				>
					{/* If the marker is "active" information is displayed */}
					{(activeMarker === index) &&
						<InfoWindow position={{ lat: marker.latitude, lng: marker.longitude }}>
							<b>{`${currentLabel}: ${marker.id}`}</b>
						</InfoWindow>
					}  
				</Marker>
			))}			
		</GoogleMap>

	</LoadScript>
  );
};
export default Map;
export const locations = [
	{id:7532,latitude:51.30156371336976,longitude:9.424828794227752},
	{id:7533,latitude:51.21536336711843,longitude:9.566243346465788},
	{id:7534,latitude:51.231318864583855,longitude:9.554796261577797},
	{id:7535,latitude:51.29663686570958,longitude:9.387431914006944},
	{id:7536,latitude:51.32489072966578,longitude:9.552076093002999},
	{id:7537,latitude:51.37175935680122,longitude:9.482135853608424},
	{id:7538,latitude:51.28456480435039,longitude:9.55362157231067},
	{id:7539,latitude:51.258690259293836,longitude:9.48704560719575},
	{id:7540,latitude:51.24245055237085,longitude:9.54410922088999},
	{id:7541,latitude:51.27144740666129,longitude:9.570066683455595}
]
export const averageLatitude = () => {
	let sum = 0;
	locations.forEach((location, index) => {
		sum = sum + Number(location.latitude.toFixed(2))
	})
	return (sum / locations.length)
}

export const averageLongitude = () => {
	let sum = 0;
	locations.forEach((location, index) => {
		sum = sum + Number(location.longitude.toFixed(2))
	})
	return (sum / locations.length)
}
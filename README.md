# Map Zero

## About Map Zero

As part of the interview process for DeDrone I was asked to complete a task to display my technical competency.

### The Requirements

- Set up a React application
- Add to React App a Google Maps API key (it’s free)
- Route below sends to UI markers location information (latitude and longitude). You should get data from this API and display all markers on the Google map.
- Use React, React Hooks, Redux and Google Map API.

### The Optional Tasks

- Instead of existing google markers display SVG images.
- Create puller (every 1 sec) to this route that gets information about markers.

Given the requirements received I hope I was able to provide you with a satisfactory answer.

## Rationale

Given the simplicity of the project I wanted to demonstrate not only the solution but how to allow for scalability, add my own personal flair, and come up with multiple methods of completing this task *(the additional methods will be added in separate branches)*

---

### Folders

- [`src`](./src/): Houses all of the application logic
- [`src/app`](./src/app/): Redux store can be found
- [`src/assets`](./src/assets/): Icon Image and other future assets
- [`src/data`](./src/data/): All the location data provided
- [`src/features`](./src/features/): The Map and the redux logic for the map can be found here

---

### Usage

1. Once you download or clone the repo run `npm install` to get all the packages
2. Add or remove locations in the [locations file](./src/data/locations.js)
3. Then in the [Map file](./src/features/Map.js) add your GoogleMaps API key to the `apiKey` variable
4. Finally run `npm start` in the terminal
5. Viola you should see all of your pins on the map

---

## Future Updates

- Adding & Deleting pins
- Custom Titles to pins
- Customizing pin icons

### If there are any questions or concerns please email me at richmondkijana@gmail.com

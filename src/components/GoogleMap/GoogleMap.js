import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import PersonPinIcon from '@mui/icons-material/PersonPin';

function GoogleMap({ address }) {
  console.log('GOOGLE MAP PROPS---', address);

  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const defaultProps = {
    center: {
      lat: lat || 31.4278103,
      lng: lng || -97.6672303
    }
  }

  const handleApiLoaded = (map, maps) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: address })
      .then((res) => {
        // full response results
        console.log('results:', res.results);

        // formatted address from results
        console.log('formatted address:', res.results[0].formatted_address);

        // geometry (lat & lng)
        setLat(res.results[0].geometry.location.lat());
        setLng(res.results[0].geometry.location.lng());
      })
    }

    return (
      // Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={14}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <PersonPinIcon
            lat={lat || defaultProps.center.lat}
            lng={lng || defaultProps.center.lng}
            color="secondary"
          />
        </GoogleMapReact>
      </div>
    );
  }

export default GoogleMap;



// test # 2

// import React from "react";
// import ReactDOM from "react-dom/client";
// // import "./index.css";
// // import App from "./App";
// // import reportWebVitals from "./reportWebVitals";
// // import React from "react";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => (
//   <div
//     style={{
//       color: "white",
//       background: "grey",
//       padding: "15px 10px",
//       display: "inline-flex",
//       textAlign: "center",
//       alignItems: "center",
//       justifyContent: "center",
//       borderRadius: "100%",
//       transform: "translate(-50%, -50%)",
//     }}
//   >
//     {text}
//   </div>
// );

// export default class Map extends React.Component {
//   static defaultProps = {
//     center: { lat: 59.95, lng: 30.33 },
//     zoom: 11,
//   };

//   render() {
//     return (
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
//         defaultCenter={this.props.center}
//         defaultZoom={this.props.zoom}
//       >
//         <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text={"Kreyser Avrora"}
//         />
//       </GoogleMapReact>
//     );
//   }
// }
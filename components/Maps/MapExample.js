import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapExample extends Component {
  static defaultProps = {
    center: {
      lat: 37.9323252,
      lng: 23.757288,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBkoURn3uc_P3qQvUEU_SV9P83sFCbtgg0" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={37.932232} lng={23.757374} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapExample;

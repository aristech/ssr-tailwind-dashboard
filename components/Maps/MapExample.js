import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Link from "next/link";

const AnyReactComponent = ({ text }) => (
  <div>
    <Link href="https://progressnet.gr">
      <a>
        <button
          className="text-blue-500 background-transparent font-bold uppercase px-8 py-2 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          <i className="fa-2x fas fa-map-marker-alt"></i>
          {/* {text}  */}
        </button>
      </a>
    </Link>
  </div>
);

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
      <div style={{ height: 600, width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "********************" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={37.932232}
            lng={23.757374}
            text="Progressnet"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapExample;

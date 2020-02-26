import React, {Component} from 'react';
import MapGL, {GeolocateControl, Marker} from 'react-map-gl';
import './maps.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import concerts from '../../Assets/Icone/concert_marker.svg';
import monuments from '../../Assets/Icone/monument_marker.svg';
import musees from '../../Assets/Icone/musee_marker.svg';
import parcs from '../../Assets/Icone/parc_marker.svg';


const MAPBOX_TOKEN = 'pk.eyJ1IjoibWVsdmluZGJ0IiwiYSI6ImNrNjBqb2RtcjA4M3Qzb21ieDB5bzE3ZmkifQ.g8UJ8r3es_zfy-NE9RVFgg'; //Set your mapbox token here

const geolocateStyle = {
  position: 'absolute',
  bottom: 0,
  right: 0,
  margin: 25
};

class Markers extends React.Component {

  render(){
    const {shops} = this.props;

    return (
      <div> 
        {
          shops.map((shop, index) => (
            <div key={index}>
              {
                shops[0].map( (city, i) => (
                  <Marker key={i} longitude={city.Longitude} latitude={city.Latitude} shop={shop}>
                    <img src={monuments} alt="monuments"/>
                  </Marker>
                ))
              }
              {
                shops[1].map( (city, i) => (
                  <Marker key={i} longitude={city.Longitude} latitude={city.Latitude} shop={shop}>
                    <img src={musees} alt="musees"/>
                  </Marker>
                ))
              }

              {
                shops[2].map( (city, i) => (
                  <Marker key={i} longitude={city.Longitude} latitude={city.Latitude} shop={shop}>
                    <img src={parcs} alt="parcs"/>
                  </Marker>
                ))
              }
              {
                shops[3].map( (city, i) => (
                  <Marker key={i} longitude={city.Longitude} latitude={city.Latitude} shop={shop}>
                    <img src={concerts} alt="concert"/>
                  </Marker>
                ))
              }
            </div>
          ))
        }
      </div>
      
    )
  }
}

class Maps extends Component {
  
  state = {
    viewport: {
      latitude: 48.85310731427324,
      longitude: 2.3534590707287877,
      zoom: 11.329890993032528,
      bearing: 0,
      pitch: 0
    }
  };

  _onViewportChange = viewport => this.setState({viewport});

  render() {
    const {viewport} = this.state;
    return (
      <div className="map filter-container">
        <MapGL
          {...viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://sprites/mapbox/light-v10"
          onViewportChange={this._onViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
          <GeolocateControl
            style={geolocateStyle}
            positionOptions={{enableHighAccuracy: true}}
            trackUserLocation={true}
          />
          {/* {console.log(this.props.shops)} */}
          <Markers shops={this.props.shops} className="filter-item"/>
        </MapGL>
      </div>
      
    );
  }
}

export default Maps;
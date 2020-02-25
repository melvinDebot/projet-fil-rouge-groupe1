import React, {Component} from 'react';
import MapGL, {GeolocateControl, Marker} from 'react-map-gl';
import './maps.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import ico from '../../Assets/Icone/concert_marker.svg'

const MAPBOX_TOKEN = 'pk.eyJ1IjoibWVsdmluZGJ0IiwiYSI6ImNrNjBqb2RtcjA4M3Qzb21ieDB5bzE3ZmkifQ.g8UJ8r3es_zfy-NE9RVFgg'; // Set your mapbox token here

const geolocateStyle = {
  position: 'absolute',
  bottom: 0,
  right: 0,
  margin: 25
};

class Markers extends React.Component{

  render(){
    const {shops} = this.props
    
    return (

      shops[0].map( city => {
        return <Marker key={city.id} longitude={parseFloat(city.Coordonne[1])} latitude={parseFloat(city.Coordonne[0])}><img src={ico} alt={ico}/></Marker> 
      }),

      shops[1].map( city => {
        return  <Marker key={city.id} longitude={parseFloat(city.Coordonne[1])} latitude={parseFloat(city.Coordonne[0])}><img src={ico} alt={ico}/></Marker>
      }),

      shops[2].map( city => {
        return  <Marker key={city.id} longitude={parseFloat(city.Coordonne[1])} latitude={parseFloat(city.Coordonne[0])}><img src={ico} alt={ico}/></Marker> 
      }),

      shops[3].map( city => {
        return <Marker key={city.id} longitude={parseFloat(city.Coordonne[1])} latitude={parseFloat(city.Coordonne[0])}><img src={ico} alt={ico}/></Marker>
      })
    );
  }
}

class Maps extends Component {
  
  state = {
    viewport: {
      latitude: 48.851343799999995,
      longitude: 2.4205886,
      zoom: 16,
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
          {console.log(this.props.shops)}
          <Markers shops={this.props.shops} className="filter-item"/>
        </MapGL>
      </div>
      
    );
  }
}

export default Maps;
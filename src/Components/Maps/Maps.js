import React, {Component} from 'react';
import MapGL, {GeolocateControl, Marker} from 'react-map-gl';
import './maps.scss';
import 'mapbox-gl/dist/mapbox-gl.css';


const MAPBOX_TOKEN = 'pk.eyJ1IjoibWVsdmluZGJ0IiwiYSI6ImNrNjBqb2RtcjA4M3Qzb21ieDB5bzE3ZmkifQ.g8UJ8r3es_zfy-NE9RVFgg'; //Set your mapbox token here

const geolocateStyle = {
  position: 'absolute',
  bottom: 0,
  right: 0,
  margin: 25
};

class Markers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      UrlMarkers : [
        {
          UrlMarker: require('../../Assets/Icone/concert_marker.svg'),
        },
        {
          UrlMarker: require('../../Assets/Icone/monument_marker.svg'),
        },
        {
          UrlMarker: require('../../Assets/Icone/musee_marker.svg'),
        },
        {
          UrlMarker: require('../../Assets/Icone/parc_marker.svg')
        },
      ]
    }
  }

  render(){
    const {shops} = this.props
    const {UrlMarkers} = this.state
    console.log(this.state.UrlMarkers)

    return (
      <div> 
        {
          shops.map((shop, index) => (
            <div key={index}>
              {
                shop.map( (city, i) => (
                  <Marker key={i} longitude={city.Longitude} latitude={city.Latitude} shop={shop}>
                    <div>
                      {
                        <img src={ UrlMarkers.map( marker => (
                          marker.UrlMarker
                        ))} alt={UrlMarkers}/>
                      }
                    </div>
                  </Marker>
                ))
              }
            </div>
          ))
        }
      </div>
        //   shops[1] && shops[1].map( (city1, mu) => {
        //     return  <Marker key={mu} longitude={city1.Longitude} latitude={city1.Latitude}><img src={musees} alt={musees}/></Marker>
        //   }),

        //   shops[2] && shops[2].map( (city2, p) => {
        //     return  <Marker key={p} longitude={city2.Longitude} latitude={city2.Latitude}><img src={parcs} alt={parcs}/></Marker> 
        //   }),

        //   shops[3] && shops[3].map( (city3, c) => {
        //     return <Marker key={c} longitude={city3.Longitude} latitude={city3.Latitude}><img src={concerts} alt={concerts}/></Marker>
        //   })
        // </div>
      
    )
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
          {/* {console.log(this.props.shops)} */}
          <Markers shops={this.props.shops} className="filter-item"/>
        </MapGL>
      </div>
      
    );
  }
}

export default Maps;
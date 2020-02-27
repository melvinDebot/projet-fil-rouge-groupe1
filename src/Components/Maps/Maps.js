import React, {Component} from 'react';
import MapGL, {GeolocateControl, Marker} from 'react-map-gl';
import './maps.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

import MarkerDetails from '../MarkerDetails/MarkerDetails';

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
  constructor(props) {
    super(props)
    this.state = {
      marker0 : null,
      marker1 : null,
      marker2 : null,
      marker3 : null,
    } 

  }

  // toggle popup of the markers
  show0(i) {
    console.log('ok')
    this.setState({
      marker0 : i,
    })

  }

  show1(i) {
    console.log('ok')
    this.setState({
      marker1 : i,
    })

  }

  show2(i) {
    console.log('ok')
    this.setState({
      marker2 : i,
    })

  }

  show3(i) {
    console.log('ok')
    this.setState({
      marker3 : i,
    })

  }

  render(){
    const {activities, filter} = this.props;

    return (
      <div> 
        { // browse the array of arrays 
          activities && activities.map((index) => (
            <div key={index}>
              { // filter function rendered on map when checkboxes checked 
                // browse the array monuments to render the markers on the map 
                // had to repeat the code because the icon marker depends on the type of array rendered
                // popup show when img tag clicked

                filter.includes(0) && activities[0].map( (city, i, activity) => (                    
                    <Marker key={i} longitude={city.Longitude} latitude={city.Latitude} activity={activity} >
                      
                      { 
                        this.state.marker0 === i ? <MarkerDetails key={i} Nom={city.Nom} /> : ""
                      }
                        
                      <img src={monuments} alt="monuments" onClick={()=> { this.show0(i) }}  />
                    </Marker>
                ))
              } 
              { // filter function rendered on map when checkboxes checked 
                // browse the array museums to render the markers on the map 
                // had to repeat the code because the icon marker depends on the type of array rendered
                // popup show when img tag clicked

                filter.includes(1) && activities[1].map( (city, i, activity) => (
                  <Marker key={i} longitude={city.Longitude} latitude={city.Latitude} activity={activity} onClick={(i)=>console.log(i)}>
                    
                    { 
                      this.state.marker1 === i  ? <MarkerDetails key={i} Nom={city.Nom} /> : ""
                    }

                    <img src={musees} alt="musees" onClick={()=>this.show1(i)} />
                  </Marker>
                ))
              }

              { // filter function rendered on map when checkboxes checked 
                // browse the array parks to render the markers on the map 
                // had to repeat the code because the icon marker depends on the type of array rendered
                // popup show when img tag clicked

                 filter.includes(2) && activities[2].map( (city, i, activity) => (
                  <Marker key={i} longitude={city.Longitude} latitude={city.Latitude} activity={activity} >
                    
                    { 
                      this.state.marker2 === i  ? <MarkerDetails key={i} Nom={city.Nom} /> : ""
                    }

                    <img src={parcs} alt="parcs" onClick={()=>this.show2(i)}/>
                  </Marker>
                ))
              }
              { // filter function rendered on map when checkboxes checked 
                // browse the array concerts to render the markers on the map 
                // had to repeat the code because the icon marker depends on the type of array rendered
                // popup show when img tag clicked

                filter.includes(3) && activities[3].map( (city, i, activity) => (
                  <Marker key={i} longitude={city.Longitude} latitude={city.Latitude} activity={activity}>
                    
                    { 
                      this.state.marker3 === i  ? (
                        <MarkerDetails key={i} Nom={city.Nom} /> 
                      ) : (
                        ""
                      )
                    }
                    <img src={concerts} alt="concert" onClick={()=>this.show4(i)} /> 

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
    const { filter } = this.props
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

          {
            // Markers get the filter function and renders updated markers(=> activities) on the map 
            // depending on what type of activities was checked
          }
          <Markers filter={filter} activities={this.props.activities} className="filter-item" />
          
        </MapGL>
      </div>
      
    );
  }
}

export default Maps;
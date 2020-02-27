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
      show0: false,
      show1: false,
      show2: false,
      show3: false
    } 
  }

  // toggle popup of the markers
  show0(i) {
    this.setState({
      marker0 : i,
      show0 : !this.state.show,
    })

  }

  show1(i) {
    this.setState({
      marker1 : i,
      show1 : !this.state.show,
    })

  }

  show2(i) {
    this.setState({
      marker2 : i,
      show2 : !this.state.show,
    })

  }

  show3(i) {
    this.setState({
      marker3 : i,
      show3 : !this.state.show,
    })
  }


  render() {
    const {activities, filter,} = this.props;
    //console.log(activities, )



    return (
      <div> 
        {
          activities && activities.map((activity, index) => (
            <div key={index}>
              {
                filter.includes(0) && activities[0].map( (city, i, activity) => (                    

                    <Marker key={i} longitude={city.Longitude} latitude={city.Latitude} activity={activity} >
                      
                      { 
                        this.state.marker0 === i && this.state.show0 ? <MarkerDetails key={i} Nom={city.Nom} close={( () => {
                          this.setState({show0 : false} )
                        })}/> : ""
                      }
                        
                      <img src={monuments} alt="monuments" onClick={()=> { this.show0(i) }}  />

                    </Marker>
                ))
              } 
              {
                filter.includes(1) && activities[1].map( (city, i, activity) => (

                  <Marker key={i} longitude={city.Longitude} latitude={city.Latitude} activity={activity} onClick={(i)=>console.log(i)}>
                    
                    { 
                      this.state.marker1 === i && this.state.show1 ? <MarkerDetails key={i} Nom={city.Nom} close={( () => {
                        this.setState({show1 : false} )
                      })}/> : ""
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
                      this.state.marker2 === i && this.state.show2 ? <MarkerDetails key={i} Nom={city.Nom} close={( () => {
                        this.setState({show2 : false} )
                      })}/> : ""
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
                      this.state.marker3 === i && this.state.show3 ?  <MarkerDetails key={i} Nom={city.Nom} close={( () => {
                        this.setState({show3 : false} )
                      })}/> : ""
                    
                    }
                    <img src={concerts} alt="concert" onClick={()=>this.show3(i)} /> 
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
            showUserLocation={true}
          />
          {/* {console.log(this.props.shops)} */}
          <Markers filter={filter} activities={this.props.activities} className="filter-item" />
          
        </MapGL>
      </div>
      
    );
  }
}

export default Maps;
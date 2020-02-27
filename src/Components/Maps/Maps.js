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
<<<<<<< HEAD
      show : false,
    } 
  }
=======
      marker0 : null,
      marker1 : null,
      marker2 : null,
      marker3 : null,
    } 
>>>>>>> f022c9bebbc92b368aa14d172b8fd41211148109

  show() {
    this.setState({ show : true})
  }

<<<<<<< HEAD
  // handleMonumentClick = (i) => {
  //   const {activities, filter} = this.props;
  //   activities[0][i].Value ++
  //   console.log(activities)
  // }
  handleClickApi(){
    const {activities} = this.props;
    console.log(activities)
=======
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

>>>>>>> f022c9bebbc92b368aa14d172b8fd41211148109
  }

  render(){
    const {activities, filter,} = this.props;

    return (
      <div> 
        {
          activities && activities.map((activity, index) => (
            <div key={index}>
              {
                filter.includes(0) && activities[0].map( (city, i, activity) => (                    
<<<<<<< HEAD
                    <Marker 
                      key={i} 
                      longitude={city.Longitude} 
                      latitude={city.Latitude} 
                      activity={activity}
                    >
                      {this.state.show ? <MarkerDetails key={i} Nom={city.Nom} close={this.show}/> : ""}
                      <img src={monuments} alt="monuments"/>
=======
                    <Marker key={i} longitude={city.Longitude} latitude={city.Latitude} activity={activity} >
                      
                      { 
                        this.state.marker0 === i ? <MarkerDetails key={i} Nom={city.Nom} /> : ""
                      }
                        
                      <img src={monuments} alt="monuments" onClick={()=> { this.show0(i) }}  />
>>>>>>> f022c9bebbc92b368aa14d172b8fd41211148109
                    </Marker>
                ))
              } 
              {
                filter.includes(1) && activities[1].map( (city, i, activity) => (
<<<<<<< HEAD
                  <Marker key={i} longitude={city.Longitude} latitude={city.Latitude} activity={activity} onClick={this.show.bind(this)}>
                    {this.state.show ? <MarkerDetails key={i} Nom={city.Nom} close={this.show}/> : ""}
                    <img src={musees} alt="musees" />
=======
                  <Marker key={i} longitude={city.Longitude} latitude={city.Latitude} activity={activity} onClick={(i)=>console.log(i)}>
                    
                    { 
                      this.state.marker1 === i  ? <MarkerDetails key={i} Nom={city.Nom} /> : ""
                    }

                    <img src={musees} alt="musees" onClick={()=>this.show1(i)} />
>>>>>>> f022c9bebbc92b368aa14d172b8fd41211148109
                  </Marker>
                ))
              }

<<<<<<< HEAD
              {
                filter.includes(2) && activities[2].map( (city, i, activity) => (
                  <Marker key={i} longitude={city.Longitude} latitude={city.Latitude} activity={activity} onClick={this.show.bind(this)}>
                    {this.state.show ? <MarkerDetails key={i} Nom={city.Nom} close={this.show}/> : ""}
                    <img src={parcs} alt="parcs" />
                  </Marker>
                ))
              }
              {
                filter.includes(3) && activities[3].map( (city, i) => (
                  <Marker key={i} longitude={city.Longitude} latitude={city.Latitude} activity={activity} onClick={this.show.bind(this)}>
                    {this.state.show ? <MarkerDetails key={i} Nom={city.Nom} close={this.show}/> : ""}
                    <img src={concerts} alt="concert" />
=======
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

>>>>>>> f022c9bebbc92b368aa14d172b8fd41211148109
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
    showPopup: false,
    popupInfo: null,
    markerList: [
      {
        lat: 48.886857,
        long: 2.356526,
        name: "Hopital",
        info: 10
      },
      { 
        lat: 48.831457,
        long: 2.301183,
        name: "Maison",
        info: 20
      },
      { 
        lat: 48.833804,
        long: 2.332401,
        name: "Voiture",
        info: 10
      }
    ],
    viewport: {
      latitude: 48.85310731427324,
      longitude: 2.3534590707287877,
      zoom: 11.329890993032528,
      bearing: 0,
      pitch: 0
    }
  };

  // renderPopup(index) {
  //   return (
  //     this.state.popupInfo && (
  //       <Popup
  //         tipSize={5}
  //         anchor="bottom-right"
  //         longitude={activities[index].long}
  //         latitude={activities[index].lat}
  //         onMouseLeave={() => this.setState({ popupInfo: null })}
  //         closeOnClick={true}
  //       >
  //         <p>
  //           <strong>{activities[index].name}</strong>
  //           <br />
  //           Available beds:{activities[index].info}
  //         </p>
  //       </Popup>
  //     )
  //   );
  // }

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
import React from 'react';
import Context from './Context';

class ContextProvider extends React.Component{
  constructor(){
    super();
    this.state = {
      isotope: {
        state: false,
        show : true,
        list : [
          {
            id : 1,
            name : "Restaurant",
            title : "Le duc",
            longitude : 2.4211505003287126,
            latitude : 48.8512844148994,
            active : false      
          },
          {
            id : 2,
            name : "Cinema",
            title : "Gaumont",
            longitude : 2.418229003786947,
            latitude : 48.850736553471464,
            active : false      
          },
          {
            id : 3,
            name : "Monument",
            title : "Tour Eiffel",
            longitude : 2.430304002373407,
            latitude : 48.843756303946755,
            active : false      
          },
          {
            id : 4,
            name : "Musee",
            title : "Louvre",
            longitude : 2.430994731014011,
            latitude : 48.84238356306906,
            active : false      
          },
        ]
      }
    }
  }
  render(){
    return (
      <Context.Provider value={{posts : this.state.isotope}}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default ContextProvider;
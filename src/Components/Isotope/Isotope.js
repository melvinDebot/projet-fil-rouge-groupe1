import React from 'react';
import "./isotope.scss";
import Checkbox from '@material-ui/core/Checkbox';


export class Isotope extends React.Component {
  constructor(props) {
    super(props);
    this.filtre = this.filtre.bind(this);    
    this.close = this.props.close
    this.state = {
      selectedActivity : []
    }
    // this.filtreEvents = this.filtreEvents.bind(this);    
  }



  filtre () {
    const { activities  } = this.props;

    console.log(activities[0])
    
    // console.log(shop)
    // this.setState({selectedActivity: [...this.state.selectedActivity, activity]})
    // console.log('aaaaaa' , this.state.selectedActivity)
     let newActivities = activities.map( element => {
       if ( element.activities[0] )  {
          console.log(element.activity)
       } else {
         return ""
       }
     });
     console.log(newActivities)
     this.props.setList(newActivities)
  }

  filtreTime (time) {
    const { activities } = this.props
    let newListTime = activities.map(elem => {
      if(elem.time === time){
        elem.active = elem.active === true ? false : true
        return elem
      } else {
        return elem
      }
    })
    //console.log(newListTime)
    this.props.setList(newListTime)
  }

  render() {
    const {activities, setFilter, filter} = this.props

    return (
      <div className="isotope-containt">
        <span className="close" onClick={this.props.close}></span>
        <div className="isotope--block">
          <h3>Filters</h3>
          <h4>Types of activities</h4>
            <div className="isotope-button">
              <label>
                <Checkbox
                checked={filter.includes(3)}
                onClick={()=>{ setFilter(3) }}
                className="filter_checkbox filter_checkbox_concert"
                />
              Concerts
            </label>
            <label>
              <Checkbox
                checked={filter.includes(2)}
                onClick={()=>{ setFilter(2) }}
                className="filter_checkbox filter_checkbox_parc"
              />
              Parks
            </label>
            <label>
              <Checkbox
                checked={filter.includes(0)}
                onClick={()=>{ setFilter(0) }}
                className="filter_checkbox filter_checkbox_monument"
              />
              Monuments
            </label>
            <label>
              <Checkbox
                checked={filter.includes(1)}
                onClick={()=>{ setFilter(1) }}
                className="filter_checkbox filter_checkbox_musee"
              />
              Museums
            </label>
          </div>
        </div>
        <div className="isotope_time_container">
          <h4>Distance (in minutes of walking)</h4>
          <div className="isotope_time_bloc">
            <button onClick={()=> {this.filtreTime(2)}}>2min</button>
            <button onClick={()=> {this.filtreTime(5)}}>5min</button>
            <button onClick={()=> {this.filtreTime(10)}}>10min</button>
            <button onClick={()=> {this.filtreTime(20)}}>20min</button>
            <button onClick={()=> {this.filtreTime(30)}}>30min</button>
            <button onClick={()=> {this.filtreTime(40)}}>+30min</button>
          </div>
        </div>
        <div className="isotope_cta">
          <button onClick={this.props.close}>Next</button>
        </div>

      </div>
    );
  }
}

export default Isotope;
import React from 'react';
import "./isotope.scss";
import Checkbox from '@material-ui/core/Checkbox';


export class Isotope extends React.Component {
  constructor(props) {
    super(props);
    this.close = this.props.close
    this.state = {
      selectedActivity : []
    }
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
    this.props.setList(newListTime)
  }

  filtreTime (time){
    const { list } = this.props
    let newListTime = list.map(elem => {
      if(elem.time === time){
        elem.active = elem.active === true ? false : true
        return elem
      } else {
        return elem
      }
    })
    console.log(newListTime)
    this.props.setList(newListTime)
  }

  render() {
    const {setFilter, filter} = this.props

    return (
      <div className="isotope-containt">
        <span className="close" onClick={this.props.close}></span>
        <div className="isotope--block">
          <h3>Filters</h3>
          <h4>Types of activities</h4>
            <div className="isotope-button">
              <label>
                {/* when click call filter function to update concert markers on the map
                    when checked add markers concerts on the map
                */}
                <Checkbox
                checked={filter.includes(3)}
                onClick={()=>{ setFilter(3) }}
                className="filter_checkbox filter_checkbox_concert"
                />
              Concerts
            </label>
            <label>
              {/* when click call filter function to update parks markers on the map
                    when checked add markers parks on the map
                */}
              <Checkbox
                checked={filter.includes(2)}
                onClick={()=>{ setFilter(2) }}
                className="filter_checkbox filter_checkbox_parc"
              />
              Parks
            </label>
            <label>
              {/* when click call filter function to update monuments markers on the map
                    when checked add markers monuments on the map
                */}
              <Checkbox
                checked={filter.includes(0)}
                onClick={()=>{ setFilter(0) }}
                className="filter_checkbox filter_checkbox_monument"
              />
              Monuments
            </label>
            <label>
              {/* when click call filter function to update museums markers on the map
                    when checked add markers museums on the map
                */}
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
          <h4>Distance (walking time)</h4>
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
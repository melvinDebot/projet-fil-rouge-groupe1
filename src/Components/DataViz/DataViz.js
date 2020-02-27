import React, { Component } from 'react';
import "./dataViz.scss";

// DataViz component called when ButtonDataViz component clicked
class DataViz extends Component{ 
  constructor(props) {
    super(props)
    this.state = {
      pieData: props.pieData
    }
  }

  componentDidMount() {
    console.log(this.state.pieData)
  }


  render() {
    return (
      <div className="data_viz">
      </div>
    )
  }
}

export default DataViz;
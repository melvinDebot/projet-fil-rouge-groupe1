
import React, { Component } from 'react';
import "./dataViz.scss";
import { ResponsivePie } from '@nivo/pie';
import axios from 'axios';

let one = "http://127.0.0.1:8000/monuments";
let two = "http://127.0.0.1:8000/musee";
let three = "http://127.0.0.1:8000/parcs";
let four = "http://127.0.0.1:8000/concerts";

const urlMonuments = axios.get(one);
const urlMusee = axios.get(two);
const urlParcs = axios.get(three);
const urlConcerts = axios.get(four);


class DataViz extends Component{ 
  constructor(props) {
    super(props)
    this.arrayApi = this.props
  }

  componentDidMount() {
    console.log(this.arrayApi)
    let data = []
    this.arrayApi.forEach(type => {
      data.push(type[0].Value)
    })
    console.log(data)
    return {data : data}
  }




  render() {
    return (
      <div className="data_viz">

      </div>
    )
  }
}

export default DataViz;
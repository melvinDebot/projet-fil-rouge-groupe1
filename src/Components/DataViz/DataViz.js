
import React, { Component } from 'react';
import "./dataViz.scss";
import { ResponsivePie } from '@nivo/pie';
import BarChart from 'react-bar-chart';


// DataViz component called when ButtonDataViz component clicked
class DataViz extends Component{ 
  constructor(props) {
    super(props)
    this.state = {
      chartData:props.chartData,
      chartDataApi : [
        {
          label : "Museums",
          id:"Museums",
          value : 1,
          colors : "red"
        },
        {
          label : "Markets",
          id:"Markets",
          value : 3,
          colors : "blue"
        },
        {
          label : "Monuments",
          id:"Monuments",
          value : 2,
          colors : "yellow"
        },
        {
          label : "Concert",
          id:"Concert",
          value : 8,
          colors:"purple"
        },
      ],
      total : 0

    }
  }

  componentDidMount() {
    this.getApi()
    this.totalChartDataApi()
  }

  getApi(){
    // this.state.chartData[0][0].Value // Récupére Value 0 du premier tableau
    
    let oneTest = this.state.chartData
    // oneTest = this.state.chartData[0][0].Value // change la valeur 'value' du tableau chartDataApi
    console.log(oneTest)
    
    this.setState({
      oneTest : oneTest
    })
  }

  totalChartDataApi(i){
    let totalApi = this.state.chartDataApi
    let total = this.state.total
    for(i = 0; i < totalApi.length; i++){
      total += totalApi[1].value
    }
    this.setState({
      total : total
    })
  }
  handleClickApi (){
    let testapi = JSON.parse(JSON.stringify(this.state.chartDataApi))
    testapi[0].value = this.state.chartDataApi[0].value
    this.setState({
      chartDataApi : testapi
    })
  }


  render() {
    return (
      <div className="data_viz">
      <h1>Your activity</h1>
      <div className="data_pie">
        <ResponsivePie 
            data={this.state.chartDataApi}
            colors={{ scheme: 'blues' }}
            height={200}
            width={200}
            innerRadius={0.5}
            padAngle={0.7}
            animate={true}

          />
          <p>During the 2024 JO, you went to {this.state.total} activities.</p>
        </div>
        <div className="data_bar-chart">
          <p>Museums . {this.state.chartDataApi[0].value} visited</p>
          <BarChart 
            data={this.state.chartDataApi}
            width={this.state.chartDataApi[0].value * 50}
            height={10}
          />
          <p>Markets . {this.state.chartDataApi[1].value} visited</p>
          <BarChart 
            data={this.state.chartDataApi}
            width={this.state.chartDataApi[1].value * 50}
            height={10}
          />
          <p>Monuments . {this.state.chartDataApi[2].value} visited</p>
          <BarChart 
            data={this.state.chartDataApi}
            width={this.state.chartDataApi[2].value * 50}
            height={10}
            backgroundColor={this.state.chartDataApi[2].color}
          />
          <p>Parks . {this.state.chartDataApi[2].value} visited</p>
          <BarChart 
            data={this.state.chartDataApi}
            width={this.state.chartDataApi[2].value * 50}
            height={10}
          />
        </div>
        <button onClick={this.handleClickApi}>ADD</button>

      </div>
    )
  }
}

export default DataViz;
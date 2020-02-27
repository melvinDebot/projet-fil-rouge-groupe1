import React from 'react';
import './App.scss';
import axios from 'axios';


// Import Components
import Maps from './Components/Maps/Maps';
import Filter from './Components/Filter/Filter';
import ButtonFilter from './Components/ButtonFilter';
import Isotope from './Components/Isotope/Isotope';
import ButtonDataviz from './Components/ButtonDataviz/ButtonDataviz';
import ListActivty from './Components/ListActivity/ListActivity';
import ButtonNav from './Components/ButtonNav/ButtonNav';
import DataViz from './Components/DataViz/DataViz';


let one = "http://127.0.0.1:8000/monuments";
let two = "http://127.0.0.1:8000/musee";
let three = "http://127.0.0.1:8000/parcs";
let four = "http://127.0.0.1:8000/concerts";

const urlMonuments = axios.get(one);
const urlMusee = axios.get(two);
const urlParcs = axios.get(three);
const urlConcerts = axios.get(four);



export default class App extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      
      isotope: {
        state: false,
        dataShow: false,
        show : true,
        activities: [
          [],
          [],
          [],
          [],]
        ,
      },
      filter: [1, 3, 0, 2],
      showMe : false,
      chartData: {
        datasets: [
          {
            data: [],
            backgroudColor: ""
          }
        ]
      }
    }
    this.setFilter = this.setFilter.bind(this)
    this.toogleIsotopeState = this.toogleIsotopeState.bind(this)
    this.showMe = this.showMe.bind(this)
  }

  getActivityMap() {

    axios.all([urlMonuments, urlMusee, urlParcs, urlConcerts])
    .then(
      axios.spread((...actives) => {
        let newIsotop = this.state.isotope
        const activities = [
          actives[0].data,
          actives[1].data,
          actives[2].data,
          actives[3].data
        ]
        
        newIsotop.activities = activities
        this.setState(newIsotop)
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount(){
    this.getActivityMap()
    this.getApi()
  }

  getApi(){
    axios.all([urlMonuments, urlMusee, urlParcs, urlConcerts])
    .then(
      axios.spread((...actives) => {
        let newIsotop = this.state.isotope
        const activities = [
          actives[0].data,
          actives[1].data,
          actives[2].data,
          actives[3].data
        ]
        
        newIsotop.activities = activities
        this.setState(newIsotop)
        
        let api = newIsotop.activities
        let tt = this.state.chartData.datasets[0].data
        //console.log(tt)

        let datas = [];
        let colors = [];
        this.setState({
          tt : datas
        })
        api.forEach(type => {
          datas.push(type[0].Value)
        })
        return {datas : datas}
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));

    
    
  }

  toogleIsotopeState() {
    const { isotope } = this.state
    isotope.state = isotope.state === true ? false : true
    
    this.setState({
      "isotope" : isotope
    })
  }

  setFilter(idActivite) {
    let filter = this.state.filter
    if (filter.includes(idActivite)) {
      let index = filter.indexOf(idActivite) 
      console.log(index)
      filter = filter.splice(index)
      console.log(filter, filter.splice(index))
    } else{
      filter.push(idActivite)
    }
    this.setState(filter)
  }

  showMe() {
    this.setState({ showMe : !this.state.showMe})
  }

  render(){
    const {isotope} = this.state

    return(
      <div className="App">
        <Filter  />
        <ButtonFilter toogle={this.toogleIsotopeState} />    
        <ButtonDataviz />      
        { isotope.activities.length ? <Maps setFilter={this.state.setFilter} filter={this.state.filter} activities={this.state.activities}  /> : null }
        { isotope.state ? <Isotope setFilter={this.setFilter} filter={this.state.filter}  close={this.toogleIsotopeState}/> : ''} 
        <ButtonNav clicked={this.showMe}/>
        {this.state.showMe ? <ListActivty close={this.showMe}/> : ""}
        <ButtonDataviz clicked={()=> {
          this.setState({dataShow : !this.state.dataShow})
        }}/>
        {this.state.dataShow ? <DataViz pieData={isotope.activities}/> : ""}
      </div>
    )
  }
}
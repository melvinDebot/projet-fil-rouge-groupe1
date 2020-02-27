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

        // an array containing monuments array, museums array, parks array, concerts array
        activities: [
          [],
          [],
          [],
          [],
        ],
      },
      filter: [0,1,2,3],
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


  // call API => multiple urls to render 
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
        //console.log(tt)

        let datas = [];
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

  // function to filter markers on the map 
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


  // toggle state when component clicked 
  showMe() {
    this.setState({ showMe : !this.state.showMe})
  }

  render(){
    const {isotope} = this.state

    return(
      <div className="App">
        <Filter  />
        <ButtonFilter toogle={this.toogleIsotopeState} />    

        {/* call setFilter function on the map */}
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
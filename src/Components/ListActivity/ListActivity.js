import React from 'react';
import './listActivity.scss';
import Activity from '../Activity/Activity';
import axios from 'axios';

let one = "http://127.0.0.1:8000/monuments";
let two = "http://127.0.0.1:8000/musee";
let three = "http://127.0.0.1:8000/parcs";
let four = "http://127.0.0.1:8000/concerts";

const urlresps1 = axios.get(one);
const urlresps2 = axios.get(two);
const urlresps3 = axios.get(three);
const urlresps4 = axios.get(four);

class ListActivty extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show : false,
      searchDog: '',
      isLoading: true,
      errors: null
    }
  }

  getActivity() {

    axios.all([urlresps1, urlresps2, urlresps3, urlresps4])
    .then(
      axios.spread((...activities) => {
        this.setState({
          activities0: activities[0],
          activities1: activities[1],
          activities2: activities[2],
          activities3: activities[3]
        })
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount(){
    this.getActivity()
  }
  

  render(){
    const {activities0, activities1, activities2, activities3} = this.state;

    return(
      <div className="filter_activity_container">
        <div className="close" onClick={this.props.close}></div>

        <div className="filter_activity_block">

          <h1>Monuments</h1>
          {
            activities0 && activities0.data.map((activity0, i) => {
              return <Activity Nom={activity0.Nom} Rue={activity0.Rue} Arrondissement={activity0.Arrondissement} key={i} activity0={activity0} />
            })
          }

          <h1>Museums</h1>
          {
            activities1 && activities1.data.map((activity1, i) => {
              return <Activity Nom={activity1.Nom} Rue={activity1.Rue} Arrondissement={activity1.Arrondissement} key={i} activity1={activity1} />
            })
          }

          <h1>Parks</h1>
          {
            activities2 && activities2.data.map((activity2, i) => {
              //console.log(resps2.data)
              return <Activity Nom={activity2.Nom} key={i} activity2={activity2} />
            })
          }

          <h1>Concerts</h1>
          {
            activities3 && activities3.data.map((activity3, i) => {
              //console.log(resps2.data)
              return <Activity Nom={activity3.Nom} Lieux={activity3.Lieux} key={i} activity3={activity3} />
            })
          }

        </div>
      </div>
       
    )
  }
}

export default ListActivty;


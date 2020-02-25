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
      errors: null,
      resps1: {
        data: []
      },
      resps2: {
        data: []
      },
     
    }
  }

  getActivity() {

    axios.all([urlresps1, urlresps2, urlresps3, urlresps4])
    .then(
      axios.spread((...responses) => {
        this.setState({
          resps1: responses[0],
          resps2: responses[1],
          resps3: responses[2],
          resps4: responses[3]
        })
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount(){
    this.getActivity()
  }
  

  render(){
    const {resps1, resps2, resps3, resps4} = this.state;

    return(
      <div className="filter_activity_container">
        <div className="close" onClick={this.props.close}></div>

        <div className="filter_activity_block">

          <h1>Monuments</h1>
          {
            resps1 && resps1.data.map((resp1, i) => {
              return <Activity Nom={resp1.Nom} Rue={resps1.Rue} Arrondissement={resp1.Arrondissement} key={i} resp1={resp1} />
            })
          }

          <h1>Musées</h1>
          {
            resps2 && resps2.data.map((resp2, i) => {
              return <Activity Nom={resp2.Nom} Rue={resp2.Rue} Arrondissement={resp2.Arrondissement} key={i} resp2={resp2} />
            })
          }

          <h1>Parcs</h1>
          {
            resps3 && resps3.data.map((resp3, i) => {
              //console.log(resps2.data)
              return <Activity Nom={resp3.Nom} key={i} resp3={resp3} />
            })
          }

          <h1>Concerts</h1>
          {
            resps4 && resps4.data.map((resp4, i) => {
              //console.log(resps2.data)
              return <Activity Nom={resp4.Nom} Lieux={resp4.Lieux} key={i} resp4={resp4} />
            })
          }

        </div>
      </div>
       
    )
  }
}

export default ListActivty;


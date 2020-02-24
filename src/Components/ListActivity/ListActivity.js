import React from 'react';
import Activity from '../Activity/Activity';
import axios from 'axios';

const style = {
  background : "white",
  width : "100%",
  height : "100%"
}

let one = "http://127.0.0.1:8000/api/bibliotheques/?hydra:member";
let two = "http://127.0.0.1:8000/api/restaurants/?hydra:member";

const requestOne = axios.get(one);
const requestTwo = axios.get(two);

class ListActivty extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show : false,
      shops : [],
      searchDog: '',
      isLoading: true,
      errors: null
    }
  }

  getActivity() {

    axios.all([requestOne, requestTwo])
    .then(
      axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
  
        // use/access the results
        console.log(responseOne, responseTwo);
      })
    )
    .then(response =>
      response.data['hydra:member'].map(shop => ({
        Nom: `${shop.Nom}`,
        numero: `${shop.numero}`,
        Rue: `${shop.Rue}`
      }))
    )
    .then(shops => {
      this.setState({
        shops,
        isLoading: false,
      });
    })
    .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount(){
    this.getActivity()
  }
  

  render(){
    const {shops} = this.state;
    return(
      <div className="filter_activity_container">
        <h1>Bibliothèque</h1>
        {
          shops.map((shop, i) => {
            return <Activity Nom={shop.Nom} Rue={shop.Rue} numero={shop.numero} key={i} shop={shop} />
          })
        }
        
      </div>
    )
  }
}

export default ListActivty;


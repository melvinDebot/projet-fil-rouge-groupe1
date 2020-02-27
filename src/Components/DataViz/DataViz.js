import React from 'react';

class DataViz extends React.Component{
  constructor(props){
    super(props);
    this.liste = this.props.liste
    this.state = {
      listeData : [
        this.liste
      ],
      total : 0
    }
  }

  componentWillMount(){
    this.getTotal();
  }

  render(){
    return(
      <div>
        HEY
      </div>
    )
  }
}

export default DataViz;
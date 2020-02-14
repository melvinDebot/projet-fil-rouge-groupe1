import React from 'react';
import './App.scss';

// Import Components
import Maps from './Components/Maps/Maps';
import Filter from './Components/Filter/Filter';
import ButtonFilter from './Components/ButtonFilter';
import Isotope from './Components/Isotope/Isotope';

//Import Context Api
import Context from './Components/Context';
import ContextProvider from './Components/ContextProvider';

export default class App extends React.Component{
  constructor (props) {
    super(props)
    this.setList = this.setList.bind(this)
    this.toogleIsotopeState = this.toogleIsotopeState.bind(this)
  }

  toogleIsotopeState() {
    const { isotope } = this.state
    isotope.state = isotope.state === true ? false : true
    console.log(isotope)
    this.setState({
      "isotope" : isotope
    })
  }
  setList(list) {
    const {isotope} = this.state

    isotope["list"] = list
    this.setState({
      "isotope" : isotope
    })
  }
  render(){
    const {isotope} = this.state
    return(
      <div className="App">
        <ContextProvider>
          <Context.Consumer>
            {(data) => <div>
              {
                data.posts.map(p => <div>
                  <Filter />
                  <ButtonFilter toogle={this.toogleIsotopeState} />
                  <Maps list={p.isotope.list} />
                  { p.isotope.state ? <Isotope list={p.isotope.list} setList={this.setList} close={this.toogleIsotopeState}/> : ''}
                </div>)
              }
            </div>}
            {/* <Filter  />
            <ButtonFilter toogle={this.toogleIsotopeState} />
            <Maps list={isotope.list} />
            { isotope.state ? <Isotope list={isotope.list} setList={this.setList} close={this.toogleIsotopeState}/> : ''} */}
          </Context.Consumer>
        </ContextProvider>
        
      </div>
    )
  }
}
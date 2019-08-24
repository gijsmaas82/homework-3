import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import ModelDetails from './ModelDetails'



const data = [
  {
    name: "Ivel Z3",
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  {
    name: "Bally Astrocade",
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  {
    name: "Sord M200 Smart Home Computer",
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  {
    name: "Commodore 64",
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
  }

  updateSelection = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  addModel = (event) => {
    event.preventDefault()
    this.props.dispatch({
      type: 'ADD_MODEL',
      payload: data.filter(computer => {
        if (computer.name === this.state.value) {
          return computer
        }    
      })
    })
  }

  getDetails = () => {
    if (this.props.state.length === 0) {
      return null
    } else {
      return this.props.state.filter(computers => computers[0])
      }
    } 
  
  
  render() {
    return (
      <div className="App">
        <ModelDetails getDetails={this.getDetails}/>
        <select onChange={this.updateSelection}>
          <option value=''>---pick a model---</option>
          {data.map(computer => {
            return <option value={computer.name}>{computer.name}  ({computer.year})</option>
          })}
        </select>
        <button onClick={this.addModel}>Add</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(App)



import React, { Component } from 'react';
import './App.css';

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

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
  }

  updateSelection = (event) => {
    this.setState({
      value: event.target.value
    })
  }
  
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <select onChange={this.updateSelection}>
          <option value=''>---pick a model---</option>
          {data.map(computer => {
            return <option value={computer.name}>{computer.name}  ({computer.year})</option>
          })}
        </select>
      </div>
    )
  }
}



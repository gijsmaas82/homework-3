import * as React from 'react'




export default class ModelDetails extends React.Component {
  
  render() {
    const computers = this.props.getDetails()
    return (

      <div>
        {computers === null && 'please pick a computer for details'}
        {computers && <ul>
          <li>name: {computers[0][0].name}</li> 
          <li>manufacturer: {computers[0][0].manufacturer}</li> 
          <li>year: {computers[0][0].year}</li> 
          <li>origin: {computers[0][0].origin}</li> 
        </ul> }
      </div>
    )
  }     
}
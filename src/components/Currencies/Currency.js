import React,{Component} from 'react'
import ReactDOM from 'react-dom'

class Currency extends React.Component{
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this)
  }
handleChange(value){
  console.log(this.props);
  this.props.onChangeCurrency(value)
}
  render(){

    // const changeCurrency = this.props.changeCurrency;
    return(
      <div>
      <select name="currency" onChange ={(event)=>{
    this.handleChange(event.target.value)

      }}>
    <option value="Eur">EUR</option>
    <option  selected value="USD" >USD</option>
    <option value="JPY">JPY</option>
    <option value="GBP">GBP</option>
  </select>
      </div>)
  }
}
export default Currency

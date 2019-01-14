import React,{Component} from 'react'
import ReactDOM from 'react-dom'

class Search extends Component{
constructor(props){
  super(props)
  this.handleSearchClick = this.handleSearchClick.bind(this)
}
handleSearchClick(textVal){
console.log('click is handled', textVal);
//this.props.onSearchPerformed("textVal")
}

  render(){
    let input
    return(<div>
<div>
<input type='text' ref={inputText =>{input = inputText}} />
<button onClick={(event)=>{this.handleSearchClick(input.value)}}>search</button>
</div>

      </div>)
  }
}

export default Search

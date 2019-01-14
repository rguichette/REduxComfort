import React from 'react'
import ReactDOM from 'react-dom'

import Currency from './Currencies/Currency.container.js'
import Search from './Search/search.container.js'




class App extends React.Component {
  render() {
    return (
  <div>
<Currency/>
<Search/>
  </div>
    );
  }
}


export default App

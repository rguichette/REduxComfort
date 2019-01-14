import {connect} from 'react-redux'
import Search from './Search'
import {searchPerformed} from '../../Actions'


function mapDispatchToProps(dispatch){
  return {
    onSearchPerformed:(searchTerm)=>{
      return dispatch(searchPerformed(searchTerm))
    }
  }
}

export default connect(mapDispatchToProps)(Search)

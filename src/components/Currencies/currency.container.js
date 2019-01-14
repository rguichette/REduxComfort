import { connect } from 'react-redux'
import {changeCurrency} from '../../Actions/index.js'
import Currency from './Currency.js'


const mapStateToProps =(state)=>{
  console.log(state);
}

const mapDispatchToProps =(dispatch)=>{

return{

  onChangeCurrency:(value)=>{
    console.log("everything ran");
return  dispatch(changeCurrency(value))

  }
}

}

const changedCurrency = connect(mapStateToProps,mapDispatchToProps)(Currency)

export default changedCurrency;

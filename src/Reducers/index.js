import {CHANGE_CURRENCY,SEARCH_PERFORMED} from '../Actions/index.js'
import {combineReducers} from 'redux'

const setDefault = {
  currency:"USD"
}
export function onCurrencyChange(state=setDefault, action){



  switch (action.type) {
    case CHANGE_CURRENCY:
    console.log("currency");
    return Object.assign({}, state,
    {
      currency:action.currency
    })

      break;

    default:
    console.log("in defult");
    return state

  }
}
function onSearchPerformed(state="", action){
  switch(action.type){
    case SEARCH_PERFORMED:
    return Object.assign({}, state,{searchTerm:action.searchTerm})
    break;
    default:
  return state
  }

}

export default combineReducers({
  onSearchPerformed,
  onCurrencyChange
})

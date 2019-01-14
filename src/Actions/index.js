export const CHANGE_CURRENCY = 'CHANGE_CURRENCY';
export const SEARCH_PERFORMED = 'SEARCH_PERFORMED';


export function changeCurrency(currency){
  return {
    type:CHANGE_CURRENCY,
    currency
  }
}
export function searchPerformed(searchTerm){
  return {
    type: SEARCH_PERFORMED,
    searchTerm
  }
}


// function currencyChanged(){
//   return {
//     type:CURRENCY_CHANGED,
//
//   }
// }

import {HEADERLIST} from './actionTypes'
 export const getHeaderListAction = (list) => ({
  type: HEADERLIST,
  list,
  isLoaded: true
 })
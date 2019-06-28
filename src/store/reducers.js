import {combineReducers} from 'redux'
import  commonReducer from '../components/commonWrapper/reducer'
export default combineReducers({
  common: commonReducer
})
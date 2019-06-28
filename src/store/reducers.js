import {combineReducers} from 'redux'
import  {reducer as commonReducer} from '../components/commonWrapper/'
import  {reducer as homeReducer} from '../pages/Home'
export default combineReducers({
  common: commonReducer,
  home: homeReducer
})
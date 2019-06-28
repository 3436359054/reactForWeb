import {HOMEACTION} from './actionTypes'
const defaultListData = {
  list: []
}
export default (state=defaultListData, action) => {
  switch (action.type) {
    case HOMEACTION: 
      return {
        list: action.list
      }
    default: return state
  }
}
// 这个reducer暴露的是 {list: action.list}
import {HEADERLIST} from './actionTypes'
const defaultList = {
  list: [],
  isLoaded: false
}
export default (state=defaultList, action) => {
  switch (action.type) {
    case HEADERLIST:
      return action
    default: return state
  }
}
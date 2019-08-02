import Redux from 'redux';

var autoPlayReducer = (state = 0, action) => {
  console.log('auto play action')
  console.log(action)
  if (action.type === 'TOGGLE_AUTOPLAY') {
    return action.autoplay
  }
  return state
}

export default autoPlayReducer;
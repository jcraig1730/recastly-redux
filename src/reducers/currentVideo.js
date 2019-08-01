import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  console.log('flag')
  console.log(action)
  if (action.type === 'CHANGE_VIDEO'){
    return action.video
  }
  return state
};

export default currentVideoReducer;

import Redux from 'redux';

var videoListReducer = (state = null, action) => {
  //TODO: define a reducer for the videoList field of our state.
  if (action.type === "SEARCH_VIDEOS"){
    return({
      state: action.payload
    })
  }
  return state
};

export default videoListReducer;

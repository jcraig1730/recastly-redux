import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => dispatch => {
    // .then(data => console.log(data))
    // .then(data => dispatch({
    //   type: 'SEARCH_VIDEOS',
    //   payload: data
    // }));
    // .then(dispatch(updateVideoList, updatecurrentVideo))

  //TODO:  Write an asynchronous action to handle a video search!
  var options = {
    key: YOUTUBE_API_KEY,
    query: q
  }
  searchYouTube(q, () => {
    return dispatch({
      type: 'd'
    })
  })
};

export default handleVideoSearch;

// this.props.searchYouTube(options, (videos) =>
// this.setState({
//   videos: videos,
//   currentVideo: videos[0]
// })
// );
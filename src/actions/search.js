import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => dispatch => {
  let searchObj = {key: YOUTUBE_API_KEY, query: q, max: 5};
  searchYouTube(searchObj, (videoList)=>{
    dispatch({type: 'SEARCH_VIDEOS', videoList})
    dispatch(changeVideo(videoList[0]))
  });

};

export default handleVideoSearch;

// this.props.searchYouTube(options, (videos) =>
// this.setState({
//   videos: videos,
//   currentVideo: videos[0]
// })
// );
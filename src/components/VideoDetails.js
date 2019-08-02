import React from 'react';

var VideoDetails = ({video}) => {
  console.log(video)
  return (<div className="video-details">
    <ul>
      <li>channelTitle: {video.snippet.channelTitle}</li>
      <li>publishedAt: {video.snippet.publishedAt}</li>
    </ul>
  </div>
);
}

// VideoDetails.propTypes = {
//   video: React.PropTypes.obj.isRequired
// }

export default VideoDetails
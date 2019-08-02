import React from 'react';

var VideoPlayer = ({video, autoplay}) => (
  !video
    ? <div className="video-player">Please wait...</div>
    : <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item playing-mode" src={`https://www.youtube.com/embed/${video.id.videoId}${autoplay === 0 ? '?rel=0;&autoplay=1&mute=1&loop=1' : ''}`} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{video.snippet.title}</h3>
        <div>{video.snippet.description}</div>
      </div>
    </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

export default VideoPlayer;

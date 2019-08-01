import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import React from 'react';

var VideoPlayerContainer = ({video}) => {
    console.log('this line')
    console.log(video)
    return (
        <VideoPlayer video={video}/>
    )
};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.
const mapStateToProps = (state) => {
    return {video: state.currentVideo}
}

export default connect(mapStateToProps, null)(VideoPlayerContainer);

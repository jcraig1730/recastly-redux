import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import autoplayToggle from '../actions/autoplayToggle'
import React from 'react';

var VideoPlayerContainer = ({video, toggleAutoplay, autoplay}) => {
    console.log('this line')
    console.log(video)
    return (
        <div>
        <VideoPlayer video={video} autoplay={autoplay}/>
        <button onClick={toggleAutoplay}>Toggle Autoplay</button>
        </div>
    )
};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.
const mapStateToProps = (state) => {
    return {video: state.currentVideo, autoplay: state.autoplay}
}

const mapDispatchToProps = dispatch => {
    return {toggleAutoplay: ()=> dispatch(autoplayToggle())}
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayerContainer);

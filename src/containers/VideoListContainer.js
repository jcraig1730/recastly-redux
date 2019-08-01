import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
import React from 'react';

var VideoListContainer = ({VideoList, handleVideoListEntryTitleClick}) => {
    return (
        <VideoList videos={videos} handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}/>
    )
};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

const mapStateToProps = (state) => {
    return {videos: state.videoList}
};

const mapDispatchToProps = dispatch => {
    return {handleVideoListEntryTitleClick: (e) => (dispatch(changeVideo(e)))}
}
export default connect(mapStateToProps, mapDispatchToProps)(VideoListContainer);

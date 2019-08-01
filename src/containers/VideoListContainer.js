import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = ({VideoList, handleVideoListEntryTitleClick}) => {
    return (
        <VideoList videoList={videoList} handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}/>
    )
};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

const mapStateToProps = (state) => ({
    videoList: state.videoList
});

const mapDispatchToProps = dispatch => {
    return {handleVideoListEntryTitleClick: (e) => (dispatch(changeVideo(e)))}
}
export default connect(mapStateToProps, mapDispatchToProps)(VideoListContainer);

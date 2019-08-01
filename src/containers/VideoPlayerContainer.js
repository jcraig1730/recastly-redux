import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = ({video}) => {
    return (
        <VideoPlayer video={video}/>
    )
};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.
const mapStateToProps = (state) => {
    video: state.video
}

export default connect(mapStateToProps, null)(VideoPlayerContainer);

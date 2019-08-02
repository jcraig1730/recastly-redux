import { connect } from 'react-redux';
import VideoDetails from '../components/VideoDetails'
import React from 'react';

var VideoDetailsContainer = ({video}) => (
  video ? (<VideoDetails video={video} />) : null
)

const mapStateToProps = state => {
  return {video: state.currentVideo};
}

export default connect(mapStateToProps, null)(VideoDetailsContainer);
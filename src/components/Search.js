import React from 'react';
import handleVideoSearch from '../actions/search.js'
import { connect } from "react-redux"


class Search extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   value: ''
    // };
  }

  handleInputChange(e) {
    // this.props.getYouTubeVideos(e.target.value);
    console.log(e.target.value)
    this.props.handleVideoSearch(e.target.value)
    // this.setState({
    //   value: e.target.value
    // });
  }


  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          // value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = () => dispatch => {
  return {handleVideoSearch: (e) => {dispatch(handleVideoSearch(e))}}
}

export default connect(null, mapDispatchToProps)(Search);

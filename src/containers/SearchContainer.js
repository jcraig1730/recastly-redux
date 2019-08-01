import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

var SearchContainer = (props) => {
    console.log(props)
    return (
        <Search value={props.query} onChange={props.onChangeQuery} onSubmit={props.handleSearchChange}/>
    )
};

const mapStateToProps = (state) => {
    console.log(state)
    return {query: state.query}
}

const mapDispatchToProps = dispatch => {
    return {
        handleSearchChange: () => (dispatch(handleSearchChange))
    }
}

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);

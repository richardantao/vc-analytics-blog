import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchPosts } from "../../../actions/posts";
import { clearErrors } from "../../../actions/errors"; 
import PropTypes from "prop-types"; 

import { Nav as Nv } from "reactstrap";

class Nav extends Component {
    state = {

    };

    static propTypes = {
        error: PropTypes.object.isRequired,
        post: PropTypes.object.isRequired,
        fetchPosts: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    async componentDidMount() {
        const { clearErrors, fetchPosts } = this.props;
        await clearErrors();
        await fetchPosts();
    };
    
    render() {
        const { posts } = this.props.post;
        
        return (
            <Nv>
                
            </Nv>
        );
    };
};

const mapStateToProps = state => ({
    error: state.error,
    post: state.post
});

const mapDispatchToProps = { fetchPosts, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
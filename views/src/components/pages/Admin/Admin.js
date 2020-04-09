import React, { Component } from "react";
import Helmet from "react-helmet";

import { connect } from "react-redux";
import { fetchPosts, editPost } from "../../../actions/posts";
import { clearErrors } from "../../../actions/errors";
import PropTypes from "prop-types";

import Form from "../../molecules/Form";
import List from "../../molecules/List";

import Nav from "../../organisms/Nav";

import "./Admin.scss";

class Admin extends Component {
    state = {

    };

    static propTypes = {
        error: PropTypes.object.isRequired,
        post: PropTypes.object.isRequired,
        fetchPosts: PropTypes.func.isRequired,
        editPost: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    async componentDidMount() {
        const { fetchPosts } = this.props;
        await fetchPosts();
    };

    render() {
        const { posts } = this.props.post;

        return (
            <>
                <Helmet>
                    <title>Admin</title>
                </Helmet>
                <Nav posts={posts}/>
                <List posts={posts}/>
            </>
        );
    };
};

const mapStateToProps = state => ({
    error: state.error,
    post: state.post
});

const mapDispatchToProps = { fetchPosts, editPost, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
import React, { Component } from "react";

import { connect } from "react-redux";
import { createPost, editPost, updatePost, deletePost } from "../../../actions/posts";
import { clearErrors } from "../../../actions/errors";
import PropTypes from "prop-types";


class Form extends Component {
    state = {
        
    };

    static propTypes = {
        error: PropTypes.object.isRequired,
        post: PropTypes.object.isRequired,
        createPost: PropTypes.func.isRequired,
        editPost: PropTypes.func.isRequired,
        updatePost: PropTypes.func.isRequired,
        deletePost: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    handleCreate
};

const mapStateToProps = state => ({
    error: state.error,
    post: state.post
});

const mapDispatchToProps = { createPost, editPost, updatePost, deletePost, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(Form);
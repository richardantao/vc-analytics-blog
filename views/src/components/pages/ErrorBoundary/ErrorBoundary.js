import React, { Component } from "react";
import Helmet from "react-helmet";

import { connect } from "react-redux";
import { logErrors } from "../../../actions/errors";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    static propTypes = {
        logErrors: PropTypes.func.isRequired
    };
    
    static getDerivedStateFromError(error) {
        return { hasError: true };
    };

    componentDidCatch(error, errorInfo) {
        logErrors(error, errorInfo);
     };
    
    render() {
        const { hasError } = this.state;
        const { 
            children, 
            error: { message } 
        } = this.props;

        if(hasError) {
            return (
                <>
                    <Helmet>
                        <title>400 Bad Request Error</title>
                    </Helmet>
                    <main role="main">
                        {message}
                    </main>
                </>
            );
        } else return children;
    };
};

const mapStateToProps = state => ({
    error: state.error
});

const mapDispatchToProps = { logErrors };

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);
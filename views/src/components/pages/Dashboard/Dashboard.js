import React, { Component } from "react";
import Helmet from "react-helmet";

import { connect } from "react-redux";
import { fetchPosts } from "../../../actions/posts";
import { clearErrors } from "../../../actions/errors";
import PropTypes from "prop-types";

import { Row, Col } from "reactstrap";

/* --- Atoms --- */
import Loading from "../../atoms/Loading";

/* --- Organisms --- */
import Nav from "../../organisms/Nav";

class Dashboard extends Component {
    state = {

    };

    static propTypes = {
        error: PropTypes.object.isRequired,
        post: PropTypes.object.isRequired,
        fetchPosts: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
    };

    async componentDidMount() {
        const { fetchPosts } = this.props;
        await fetchPosts();
    };
    
    render() {
        const { posts, isLoading } = this.props.posts;

        return (
            <>
                <Helmet>
                    <title>Dashboard</title>
                </Helmet>
                <Nav/>
                <main role="main">
                    { isLoading ? <Loading/> :
                        <Row>
                            <Col>
                                {posts.map(({ _id, title, category, body }) => {
                                    return (
                                        <Card
                                            key={_id}
                                            title={title}
                                            category={category}
                                            body={body}
                                        />
                                    );
                                })}
                            </Col>
                        </Row>
                    }
                </main>
            </>
        );
    };
};

const mapStateToProps = state => ({
    error: state.error,
    post: state.post
});

const mapDispatchProps = { fetchPosts, clearErrors };

export default connect(mapStateToProps, mapDispatchProps)(Dashboard);
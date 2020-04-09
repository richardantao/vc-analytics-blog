import React, { Component } from "react";
import Helmet from "react-helmet";

import { connect } from "react-redux";
import { fetchPosts } from "../../../actions/posts";
import { clearErrors } from "../../../actions/errors";
import PropTypes from "prop-types";

import { Row, Col } from "reactstrap";

/* --- Atoms --- */
import Loading from "../../atoms/Loading";

/* --- Molecules --- */
import Card from "../../molecules/Card/Card";

/* --- Organisms --- */
import Nav from "../../organisms/Nav";

import "./Dashboard.scss";

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
        const { posts, isLoading } = this.props.post;

        return (
            <>
                <Helmet>
                    <title>Dashboard</title>
                </Helmet>
                <Nav posts={posts}/>
                <main role="main" id="dashboard">
                    { isLoading ? <Loading/> :
                        <Row>
                            {posts.map(({ _id, title, category, text, urlPath }) => {
                                return (
                                    <Col xs="4" sm="4" md="4" lg="4" xl="4">
                                        <Card
                                            key={_id}
                                            title={title}
                                            category={category}
                                            text={text}
                                            urlPath={urlPath}
                                        />
                                    </Col>
                                );
                            })}
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
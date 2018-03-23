import React from 'react'
import { Jumbotron } from 'reactstrap';
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";

class Page404 extends React.Component {
    render() {
        // The path used to render this 404
        const path = this.props.match.path;

        // The reason for this 404 (if one such exists)
        const reason = this.props.reason? this.props.reason: "";

        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">404</h1>
                    <p className="lead">You've stumbled upon a missing site!</p>
                    <p>{reason}</p>
                    <hr className="my-2" />
                    <p>The attempted route was: <b>{path}</b></p>
                </Jumbotron>
            </div>
        );
    }
}

Page404.propTypes = {
    reason: PropTypes.string,
    match: PropTypes.object.isRequired
};

export default withRouter(Page404)

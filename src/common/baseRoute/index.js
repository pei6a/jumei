import React, { Component } from 'react';
import Layout from '@layout'
import { Route } from 'react-router-dom'
import auth from '../auth/index'
console.log(auth,123)

class BaseRoute extends Component {
    render() {
        let { component, path, ...rest } = this.props
        return (
            <Layout {...rest}>
                <Route path={path} component={component} />
            </Layout>
        );
    }
}
export default auth(BaseRoute)

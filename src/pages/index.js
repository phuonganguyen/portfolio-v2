import React from "react";
import {Link} from "gatsby";
import Layout from '../components/layout';

export default () => {
    return (
        <Layout>
            <h1>Hello.</h1>
            <h2>I'm Phuong, a full-stack developer living in Ho Chi Minh City.</h2>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    );
}

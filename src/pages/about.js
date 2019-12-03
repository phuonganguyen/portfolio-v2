import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Head from '../components/head';
import Layout from '../components/layout';

const AboutPage = () => {
    const data= useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
                edges {
                    node {
                        html
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <Head title="About"/>
            <h1>About me</h1>
            <div dangerouslySetInnerHTML={{__html: data.allMarkdownRemark.edges[0].node.html}}></div>
        </Layout>
    );
}

export default AboutPage;
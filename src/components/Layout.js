import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        // container
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <Header titleLink={data.site.siteMetadata.title} />
            <main className="mb-auto">
                {children}
            </main>
            <Footer />
        </div>
    )
};

export default Layout;
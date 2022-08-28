import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    defaultTitle: title
                    defaultDescription: description
                    siteUrl
                    defaultImage: image
                    twitterUsername
                }
            }
        }
    `);

    return data.site.siteMetadata
};

export default useSiteMetadata;
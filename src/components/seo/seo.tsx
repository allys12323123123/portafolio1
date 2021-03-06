import React from "react"
import {Helmet} from "react-helmet"
//import { useStaticQuery, graphql } from "gatsby"
import {SEOProps /*QueryTypes*/} from "./seo.types"

const SEO = ({description = "", lang = "en", meta = [], title}: SEOProps): JSX.Element => {
 //const { site } = useStaticQuery<QueryTypes>(SEOStaticQuery)

 const metaDescription: string = description //|| site.siteMetadata.description
 //const defaultTitle = site.siteMetadata?.title
 const defaultTitle: string = "Portfolio"
 return (
  <Helmet
   htmlAttributes={{
    lang,
   }}
   title={title}
   titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
   meta={[
    {
     name: `description`,
     content: metaDescription,
    },
    {
     property: `og:title`,
     content: title,
    },
    {
     property: `og:description`,
     content: metaDescription,
    },
    {
     property: `og:type`,
     content: `website`,
    },
    {
     name: `twitter:card`,
     content: `summary`,
    },
    {
     /*
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        */
    },
    {
     name: `twitter:title`,
     content: title,
    },
    {
     name: `twitter:description`,
     content: metaDescription,
    },
   ].concat(meta)}
  />
 )
}

/*
// Queries
const SEOStaticQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
*/

export default SEO

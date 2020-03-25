import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

 const SEO = ({ description, image, article, pageTitle, pathname}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            viewport
            lang
            url
            lang
            charSet
            icon
          }
        }
      }
    `
  )

  const seo = {
    title: pageTitle || site.siteMetadata.title,
    url: `${site.siteMetadata.url}${pathname || "/"}`,
    description: description || site.siteMetadata.description,
  }

  return (
    <Helmet title={seo.title} defer={false}>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={site.siteMetadata.keywords}/>
      <meta charSet={site.siteMetadata.charSet}/>
      <link rel="icon" type="image/png" href={site.siteMetadata.icon}/>
      <html lang={site.siteMetadata.lang}/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content={site.siteMetadata.viewport} />

      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && (
        <meta property="og:type" content="article" />
      )}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
    </Helmet>
  )
}
export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}
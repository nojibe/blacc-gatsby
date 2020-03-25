import React from "react"
import {Link,useStaticQuery, graphql} from "gatsby"


export default () => {
  const data = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          author 
          authorWebsite
        }
      }
    }
    `,
  )
  return (
    <footer id="footer" className="inverted">
      <div className="copyright-content">
        <div className="container">
          <div className="copyright-text text-center">&copy; {new Date().getFullYear()} BLACC - Unity in Community. All Rights Reserved.
            Website Designed By<a href={data.siteMetadata.authorWebsite} target="_blank">{data.siteMetadata.author}</a></div>
        </div>
      </div>
    </footer>
  )


}
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            icon
            menuLinks {
              dropdown {
                name
                link
              }
              name
              link
            }
          }
        }
      }
    `,
  )
  return (
    <header id="header" data-transparent="true" data-fullwidth="true" className="dark submenu-light">
      <div className="header-inner">
        <div className="container">

          <div id=logo>
            <Link to="/"><img src={data.siteMetadata.icon} alt="BLACC Logo"/></Link>
          </div>

          <div id="mainMenu-trigger">
            <a class="lines-button x"><span class="lines"></span></a>
          </div>

          <div id="mainMenu">
            <div className="container">
              <nav>
                <ul>
                  {data.menuLinks.map( link => (
                    link.dropdown == null ?
                      <li key={link.name}>
                        <Link to={link.link}>{link.name}</Link>
                      </li>
                      :
                      <li key={link.name} className={dropdown}><a>{link.name}</a>
                      <ul className={dropdown-menu}>
                        <li>
                          <Link to={link.dropdown.link}>
                            {link.dropdown.name}
                          </Link>
                        </li>
                      </ul>
                      </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}
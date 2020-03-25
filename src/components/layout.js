import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/style.css"

export default ({children}) => (
  <body data-animation-in="fadeIn" data-icon="13" data-icon-color="#CC0000" data-speed-in="500">
    <div className={body-inner}>
      <Header/>
      {children}
    </div>
    <Footer/>

    <a id="scrollTop"><i className="icon-chevron-up"/><i className="icon-chevron-up"/></a>

    <script src="../js/jquery.js"/>
    <script src="../js/plugins.js"/>

    <script src="../js/functions.js"/>
  </body>
)
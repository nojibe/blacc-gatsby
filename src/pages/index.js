import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo.js"

export default () =>

  <Layout>
    <SEO/>
    <div id="slider" class="fullscreen html5vid video-loaded text-light">
      <video poster="images/Goddess.jpg" playsinline loop muted autoplay preload="auto">
        <source src="video/theSource.mp4" type="video/mp4" />
      </video>
      <div class="bg-overlay"></div>
      <div class="container container-fullscreen">
        <div class="text-middle text-center text-light">
          <h2 class="text-uppercase text-lg">Welcome Home</h2>
          <p class="lead">Find Your Home in the BLACC Communtiy</p>
          <a href="organizations.html" class="btn btn-outline btn-light">Plug Me In!</a>
        </div>
      </div>
    </div>
  </Layout>

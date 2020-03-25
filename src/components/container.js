import React from "react"
import containerStyles from "css-modules/container.module.css"

export default ({ children }) => (
  <div className={containerStyles.container}>{children}</div>
)
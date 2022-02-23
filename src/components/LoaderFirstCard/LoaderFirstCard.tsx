import React from "react"
import ContentLoader from "react-content-loader"

const LoaderFirstCard = () => (
  <ContentLoader 
    speed={2}
    width={286}
    height={217}
    viewBox="0 0 286 217"
    backgroundColor="#6a4dbc"
    foregroundColor="#8973c4"
  >
    <rect x="1" y="43" rx="16" ry="16" width="285" height="174" /> 
    <rect x="0" y="2" rx="16" ry="16" width="285" height="27" />
  </ContentLoader>
)

export default LoaderFirstCard
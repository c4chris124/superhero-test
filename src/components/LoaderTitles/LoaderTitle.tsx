import React from "react"
import ContentLoader from "react-content-loader"

const LoaderTitle = () => (
  <ContentLoader 
    speed={2}
    width={290}
    height={31}
    viewBox="0 0 290 31"
    backgroundColor="#6b4dbca2"
    foregroundColor="#8d7ac0a7"
    style={{marginTop: '30px', marginBottom: '25px'}}
  >
    <rect x="0" y="0" rx="16" ry="16" width="289" height="30" />
  </ContentLoader>
)

export default LoaderTitle
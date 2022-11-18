import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader
    className="Boatcard" 
    speed={2}
    width={420}
    height={508}
    viewBox="0 0 420 508"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="22" y="453" rx="10" ry="10" width="180" height="52" /> 
    <rect x="1" y="1" rx="10" ry="10" width="416" height="254" /> 
    <rect x="213" y="453" rx="10" ry="10" width="180" height="52" /> 
    <rect x="6" y="322" rx="0" ry="0" width="408" height="61" /> 
    <rect x="8" y="278" rx="0" ry="0" width="361" height="31" /> 
    <rect x="9" y="400" rx="0" ry="0" width="280" height="37" />
  </ContentLoader>
)

export default Skeleton
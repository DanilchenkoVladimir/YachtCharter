import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader
    className="Boatcard"
    speed={2}
    width={420}
    height={505}
    viewBox="0 0 420 505"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="420" height="254" /> 
    <rect x="24" y="274" rx="0" ry="0" width="338" height="31" /> 
    <rect x="3" y="318" rx="0" ry="0" width="431" height="33" /> 
    <rect x="8" y="370" rx="0" ry="0" width="354" height="41" /> 
    <rect x="9" y="437" rx="0" ry="0" width="399" height="62" />
  </ContentLoader>
)

export default Skeleton
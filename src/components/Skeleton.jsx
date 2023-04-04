import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={1}
    width={290}
    height={387}
    viewBox="0 0 290 387"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="550" y="569" rx="3" ry="3" width="67" height="11" />
    <rect x="474" y="36" rx="10" ry="10" width="150" height="132" />
    <rect x="627" y="109" rx="3" ry="3" width="150" height="15" />
    <rect x="618" y="-278" rx="3" ry="3" width="93" height="15" />
    <rect x="337" y="113" rx="9" ry="9" width="80" height="24" />
    <rect x="1" y="0" rx="0" ry="0" width="335" height="229" />
    <rect x="1" y="241" rx="0" ry="0" width="342" height="42" />
    <rect x="2" y="294" rx="0" ry="0" width="94" height="25" />
    <rect x="2" y="328" rx="0" ry="0" width="87" height="24" />
    <rect x="3" y="358" rx="0" ry="0" width="130" height="36" />
    <rect x="240" y="350" rx="0" ry="0" width="53" height="43" />
  </ContentLoader>
);

export default Skeleton;

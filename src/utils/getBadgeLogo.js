import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

import html5Logo from "../images/about-logos/html5.svg";
import cssLogo from "../images/about-logos/css.svg";
import freecodecampLogo from "../images/about-logos/freecodecamp.svg";
import frontendLogo from "../images/about-logos/front-end.png";
import sassLogo from "../images/about-logos/sass.svg";
import javascriptLogo from "../images/about-logos/javascript.svg";

import materializeLogo from "../images/about-logos/materialize.png";
import angularLogo from "../images/about-logos/angular.svg";

// const allBadges = [
//   "html5",
//   "css",
//   "responsive",
//   "freecodecamp",
//   "sass",
//   "materialize",
//   "front-end",
//   "javascript",
//   "angular",
// ];
// could map the badges to make jsx
// {name: "", src: "", alt: ""}

// const articlesJsx = articlesObj.map((item, index) => {
//   return (
//     <View key={index}>...</View>
//  );
// });

const getBadgeLogo = (name) => {
  const cleanedName = name.toLowerCase();
  switch (cleanedName) {
    case "html5":
      return <img src={html5Logo} alt={name} />;

    case "css":
      return <img src={cssLogo} alt={name} />;

    case "responsive":
      return <FontAwesomeIcon icon={faMobileAlt} />;

    case "freecodecamp":
      return <img src={freecodecampLogo} alt={name} />;

    case "sass":
      return <img src={sassLogo} alt={name} />;

    case "materialize":
      return <img src={materializeLogo} alt={name} />;

    case "front-end":
      return <img src={frontendLogo} alt={name} />;

    case "javascript":
      return <img src={javascriptLogo} alt={name} />;

    case "angular":
      return <img src={angularLogo} alt={name} />;

    default:
      break;
  }
};
export default getBadgeLogo;

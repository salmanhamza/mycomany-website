import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
const Links = () => {
  const [linksVisibility, setLinksVisibility] = useState(false);

  const links = [
    "home",
    "about",
    "services",
    "portfolio",
    "testimony",
    "news",
    "contact",
  ];

  const toggleVisibility = () => {
    setLinksVisibility(!linksVisibility);
  };

  return (
    <>
      <div className="links__button hide__button">
        <button className="btn menu" onClick={toggleVisibility}>
          <RiMenu3Line />
        </button>
      </div>
      <div className={`links ${!linksVisibility ? "hide__links" : ""}`}>
        {links.map((link, index) => {
          return (
            <Link
              className={`link ${!index ? "active" : ""}`}
              to={`/${link}`}
              onClick={toggleVisibility}
            >
              {link}
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Links;

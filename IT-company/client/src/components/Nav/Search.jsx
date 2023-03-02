import Button from "../Global__Components/Button";
import { RiSearchLine } from "react-icons/ri";
import { useState } from "react";
const Search = () => {
  const [visible, setVisible] = useState(false);

  const toggleSearchBox = () => {
    setVisible(!visible);
  };

  return (
    <div className={`search ${visible ? "visible" : ""}`}>
      <div className="search__container">
        <div className="search__button">
          <a href="#" onClick={toggleSearchBox}>
            <RiSearchLine />
          </a>
        </div>
        <div className={`search__box ${visible ? "visible" : ""}`}>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};
export default Search;

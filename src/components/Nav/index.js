import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

const Nav = (props) => {

const {
  categories = [],
  setCurrentCategory,
  currentCategory,
} = props;


// updates the website title to the current nav tab 'commericial, portraits, landscape'
useEffect(() => {
  document.title = capitalizeFirstLetter(currentCategory.name)
}, [currentCategory]); //directs the hook to re-render the component on changes to the value of this state

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/" className="flex-row px-1 my-1">
          <span role="img" aria-label="camera">
            {" "}
            📸
            {" "}
          </span>
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About Me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            // Whenever we map over anything in JSX, the outermost element
            // must have a key attribute that's set to be something unique.
            // This helps React keep track of items in the virtual DOM.
            <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
              <span onClick={() => setCurrentCategory(category)}>
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

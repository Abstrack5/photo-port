import React from "react";

const categories = [
  {
      name: 'Commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
  },
  {
      name: 'Portraits',
      description: 'Portraits of people in my life',
  },
  {
      name: 'Landscape',
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature',
  },
];

function categorySelected(name) {
  console.log(`${name} clicked`);
  // console.log('You clicked a Nav link!')
};

const Nav = () => {
 
  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/" className="flex-row px-1 my-1">
          <span role="img" aria-label="camera"> 📸</span>Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className='flex-row'>
            <li className='mx-2'>
                <a href='about'>
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
                <li className='mx-2' key={category.name} >
                     <span onClick={() => categorySelected(category.name)} >
                      {category.name}
                      </span>
                </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

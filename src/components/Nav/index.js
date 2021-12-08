import React from 'react';

const categories = [
    {
        name: "commercial",
        description: "Photos of grocery stores, food trucksm and other commercial projects"
    
    },
    {
        name: "portraits", description: "Portraits of people in my life" 
    },
    { name: "food", description: "Delicious delicacies"},
    {
        name: "landscape", 
        description: "Fields, farm houses, waterfalls, and the beauty of nature",
    }
];



function Nav () {
    return (
       <header>
           <h2>
    <a data-testid="link" href="/">
      <span role="img" aria-label="camera"> 📸</span>Oh Snap!
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a data-testid="about"   href="#about">
          About me
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
      {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
          <span>
            {category.name}
          </span>
        </li>
      ))}
    </ul>
  </nav>
       </header>
    )
}

export default Nav;
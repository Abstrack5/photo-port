import React from 'react';
import { render, cleanup } from '@testing-library/react'; // react testing library
// The render function will do just what its name implies: "render" the component. 
// What actually happens is that Jest creates a simulated DOM in a Node.js environment to 
// approximate the DOM (no component is actually visibly rendered).

// The cleanup function is used to remove components from the DOM to prevent memory 
// leaking, as well as variable or data collisions between tests that could corrupt test 
// results.
import '@testing-library/jest-dom/extend-expect'; // jest-dom package
// jest-dom offers access to custom matchers that are used to test DOM elements. 
// To learn more, take a look at the GitHub documentation for jest-dom 
// (https://github.com/testing-library/jest-dom).
import About from '..';


afterEach(cleanup); //This will ensure that after each test, we won't have any leftover 
//memory data that could give us false results.


describe('About component', () => { //declaring the component were testing
    // baseline test to verify that the component is rendering
    it('renders', () => { //it or test can be used to test
        render(<About />);   
    });
    // snapshot test
    it('matches snapshot DOM node structure', () =>{
        const {asFragment } = render(<About />); //returns a snapshot of the About component
        expect(asFragment()).toMatchSnapshot();
    })

});


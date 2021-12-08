import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../index';

afterEach(cleanup);

describe('About component', () => {
    //renders About test


    //First test
    it('renders', () => {
        render(<About />);
    });
    //Second Test
    it('matches snapshot DOM node structure' , () => {
        //redner About
        const { asFragment } = render(< About />);

        expect(asFragment()).toMatchSnapshot();
    })

})
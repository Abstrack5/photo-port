import React from 'react';
import { render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('ContactForm component', () => {
    it('render ContactForm', () => {
        render(<ContactForm />)
    });

    it('matches snapshot', () => {
        const{asFragment}= render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('match by id', () => {
        const{getByTestId}=render(<ContactForm />);
        expect(getByTestId('h1tag')).toHaveTextContent('Contact Me');
        expect(getByTestId('button')).toHaveTextContent('Submit');
    })
})
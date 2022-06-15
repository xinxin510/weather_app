import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Results from '../components/Results';
import {exampleData} from '../exampleData/exampleData';
import helpers from '../utils/helpers';

describe('<Results />', () => {
    test('a forward arrow button appears in the hourly temperature section, it shows temperatures from now to 7pm', () => {
        const mock = jest.spyOn(helpers, "getCurrHour").mockImplementation(jest.fn(() => 0));
        render(<Results 
            weatherInfo={exampleData}
            metric='F'
        />)
        const forwardArrowElement = screen.getByTestId('forwardArrow');
        expect(forwardArrowElement).toBeInTheDocument();
        expect(screen.getByText(/now/i)).toBeVisible();
        expect(screen.getByText(/7 pm/i)).toBeVisible();
    })

    test('When the forward arrow button is clicked, it shows temperature at 8pm, 9pm and 10pm, and this button is invisible', () => {
        const mock = jest.spyOn(helpers, "getCurrHour").mockImplementation(jest.fn(() => 0));
        render(<Results 
            weatherInfo={exampleData}
            metric='F'
        />)
        const forwardArrowElement = screen.getByTestId('forwardArrow');
        fireEvent.click(forwardArrowElement);
        expect(screen.getByText(/8 pm/i)).toBeInTheDocument();
    })

    test('when another day is clicked in the forcast list, it should show the date and temperature of that date', () => {
        render(<Results 
            weatherInfo={exampleData}
            metric='F'
        />)
        expect(screen.getByText(/Mon, 13 Jun/i)).toBeInTheDocument();
        const wedForcastElement = screen.getByText(/tue/i);
        expect(wedForcastElement).toBeInTheDocument();
        fireEvent.click(wedForcastElement);
        expect(screen.queryByText(/Mon, 13 Jun/i)).toBeNull();
        expect(screen.getByText(/Tue, 14 Jun/i)).toBeInTheDocument();
    })
})
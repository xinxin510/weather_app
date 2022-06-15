import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import Summary from '../components/summary';
import {exampleData} from '../exampleData/exampleData';

describe('<Summary />', () => {
    test("Summary component includes date, celsius temperature and location information", () => {
        render(<Summary 
                location={exampleData.resolvedAddress}
                dayInfo={exampleData.days[0]}
                metric='C'
                />);
        const dateElement = screen.getByText(/Mon, 13 Jun/i);
        expect(dateElement).toBeInTheDocument();
    
        const locationElement = screen.getByText(/Maple Grove, MN/i);
        expect(locationElement).toBeInTheDocument();
    
        const tempElement = screen.getByText(/22°/i);
        expect(tempElement).toBeInTheDocument();
    })
    
    test("should show Fahrenheit temperature", () => {
        render(<Summary 
                location={exampleData.resolvedAddress}
                dayInfo={exampleData.days[0]}
                metric='F'
                />);
        const dateElement = screen.getByText(/Mon, 13 Jun/i);
        expect(dateElement).toBeInTheDocument();
    
        const locationElement = screen.getByText(/Maple Grove, MN/i);
        expect(locationElement).toBeInTheDocument();
    
        const tempElement = screen.getByText(/72°/i);
        expect(tempElement).toBeInTheDocument();
    })
})

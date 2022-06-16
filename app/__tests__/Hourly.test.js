import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import Hourly from '../components/Hourly';
import {exampleData} from '../exampleData/exampleData';
import helpers from '../utils/helpers';

describe('<Hourly />', () => {

    test("Hourly component includes a weather description", () => {
        render(<Hourly 
                timeZone={exampleData.timezone}
                description={exampleData.days[0].description}
                hourlyInfo={exampleData.days[0].hours}
                />);
        const descriptionElement = screen.getByText(/Partly cloudy throughout the day with morning rain./i);
        expect(descriptionElement).toBeInTheDocument();
    })
    
    test("shows now and further hourly temp while checking today's hourly temp", () => {
        const mock = jest.spyOn(helpers, "getCurrHour").mockReturnValue(0);
        render(<Hourly 
                timeZone={exampleData.timezone}
                description={exampleData.days[0].description}
                hourlyInfo={exampleData.days[0].hours}
                isToday={true}
                />);
        expect(mock).toHaveBeenCalledTimes(11);
        const hourlyNowElement = screen.getByText(/now/i);
        expect(hourlyNowElement).toBeInTheDocument();
        const sevenPmElement = screen.getByText(/7 pm/i);
        expect(sevenPmElement).toBeInTheDocument();
    })

    test('shows hourly temp while checking when the date is not today', () => {
        const mock = jest.spyOn(helpers, "getCurrHour").mockReturnValue(0);
        render(<Hourly 
            timeZone={exampleData.timezone}
            description={exampleData.days[0].description}
            hourlyInfo={exampleData.days[0].hours}
            isToday={false}
            />);
        expect(mock).toHaveBeenCalledTimes(11);
        const firstHourElement = screen.getByText(/12 pm/i);
        expect(firstHourElement).toBeInTheDocument();
        const hourlyNowElement = screen.queryByText(/now/i);
        expect(hourlyNowElement).toBeNull();
        const sevenPmElement = screen.getByText(/7 pm/i);
        expect(sevenPmElement).toBeInTheDocument();
    })
})
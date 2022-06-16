import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import App from '../components/App';
import {exampleData, londonData} from '../exampleData/exampleData';
import api from '../utils/api';

describe('<App />', () => {
    afterEach(() => {
        jest.clearAllMocks();
    })
    test("App fetches API and dispays data", async() => {
        const mockAPI = jest.spyOn(api, 'fetchWeatherData').mockResolvedValue(exampleData);
        render(<App />);
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
        expect(mockAPI).toHaveBeenCalledTimes(1);
        expect(await screen.findByText(/weather details/i)).toBeInTheDocument();
        expect(await screen.findByText(/10-day forcast/i)).toBeInTheDocument();
    })
    
    test("App fetches API and get an error", async() => {
        const mockAPI = jest.spyOn(api, 'fetchWeatherData').mockRejectedValue('City not found');
        render(<App />);
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
        expect(mockAPI).toHaveBeenCalledTimes(1);
        expect(await screen.findByText(/City not found/i)).toBeInTheDocument();
        expect(await screen.findByText(/Did you make a typo?/i)).toBeInTheDocument();
    })
    
    test('App shows London weather when a user search London', async() => {
        const mockAPI = jest.spyOn(api, 'fetchWeatherData').mockResolvedValueOnce(exampleData);
        const mockAPISearch = jest.spyOn(api, 'fetchWeatherData').mockResolvedValueOnce(londonData);
        render(<App />);
        expect(mockAPI).toHaveBeenCalledTimes(1);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(await screen.findByText(/maple grove/i)).toBeInTheDocument();
        expect(screen.queryByText(/london/i)).toBeNull();
        fireEvent.change(screen.getByRole('textbox'), {target: {value: 'london'}});
        fireEvent.click(screen.getByRole('button'));
        expect(mockAPISearch).toHaveBeenCalledTimes(2);
        expect(await screen.findByText(/london/i)).toBeInTheDocument();
        expect(screen.queryByText(/maple grove/i)).toBeNull();
    })

    test('users can toggle temperature between celsius and fahrenheit', async() => {
        const mockAPI = jest.spyOn(api, 'fetchWeatherData').mockResolvedValueOnce(londonData);
        render(<App />);
        expect(mockAPI).toHaveBeenCalledTimes(1);
        expect((await screen.findByTestId('temp')).textContent).toBe('67°');
        fireEvent.click(screen.getByText('C'));
        expect((screen.getByTestId('temp')).textContent).toBe('19°');
        fireEvent.click(screen.getByText('F'));
        expect((screen.getByTestId('temp')).textContent).toBe('67°');
    })
})

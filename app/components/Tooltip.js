import React from 'react';
import useHover from './useHover';

const style = {
    tooltipContainer: {
        position: 'relative',
        cursor: 'pointer',
        color: '#ffffff',
    },
    
    tooltip: {
        position: 'absolute',
        zIndex: 2,
        top: '40px',
        left: '20px',
        width: '220px',
        backgroundColor: '#2a4a58',
        opacity: 0.95,
        padding: '10px',
        fontSize: '14px',
        fontWeight: 900
    } 
}


export default function Tooltip({title, children}) {
    const [hovering, attrs] = useHover();
    const titleTipMap = {
        'sunrise': 'The time in the morning when the sun appears or full daylight arrives.',
        'sunset': 'The time in the evening when the sun disappears or daylight fades.',
        'precipitation': 'Rain, snow, sleet, or hail that falls to the ground.',
        'humidity': 'A quantity representing the amount of water vapor in the atmosphere.',
        'wind': 'The perceptible natural movement of the air.',
        'pressure': 'When a low-pressure system moves into an area, it usually leads to cloudiness, wind, and precipitation. High-pressure systems usually lead to fair, calm weather.',
        'feels like': 'A measurement of how hot or cold it really feels like outside.',
        'visibility': 'A measure of the horizontal opacity of the atmosphere at the point of observation.',
        'C/F': 'Select a temperature scale: Celsius or Fahrenheit'
    }

    return(
        <div style={style.tooltipContainer} {...attrs}>
            {hovering === true && <div style={style.tooltip}>{titleTipMap[title]}</div>}
            {children}
        </div>
    )
}
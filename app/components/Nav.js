import React from 'react';
import {MdSearch} from 'react-icons/md';
import Tooltip from './Tooltip';

export default function Nav({metric, setCity, toggleMetric}) {
  const [input, setInput] = React.useState('');

  const submitSearch = () => {
    setCity(input);
    setInput('')
  }

  const pressEnter = (e) => {
    if (e.code === 'Enter') {
      submitSearch();
    }
  }

  return (
    <div className='flex justifySpaceBetween margin40'>
      <div className='search flex justifySpaceBetween'>
        <input 
          type="text" 
          placeholder='Eg. San Francisco' 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={pressEnter}
        />
        <button onClick={submitSearch}>
          <MdSearch className='lightBlue' size={20}/>
        </button>
      </div>
      <Tooltip title='C/F'>
        <div className='toggleButton flex alignItemsTop justifyCenter'>
          <a
            className={metric === 'C' ? 'darkBlue bolder' : 'lightGrey'}
            onClick={toggleMetric}
          >C</a>
          /
          <a
            className={metric === 'F' ? 'darkBlue bolder' : 'lightGrey'}
            onClick={toggleMetric}
          >F</a>
        </div>
      </Tooltip>
    </div>
  )
}
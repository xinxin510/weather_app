import React from 'react';
import {MdSearch} from 'react-icons/md';

export default function Nav({metric, search, toggleMetric}) {
  const [input, setInput] = React.useState('');

  const submitSearch = () => {
    search(input);
    setInput('')
  }

  return (
    <div className='flex justifySpaceBetween margin'>
      <div className='search flex justifySpaceBetween'>
        <input type="text" placeholder='Eg. San Francisco' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={submitSearch}><MdSearch className='lightBlue' size={20}/></button>
      </div>
      <div className='flex alignItemsTop toggleButton justifyCenter'>
        <a
          className={metric === 'C' ? 'darkBlue' : 'lightGrey'}
          onClick={toggleMetric}
        >C</a>
        /
        <a
          className={metric === 'F' ? 'darkBlue' : 'lightGrey'}
          onClick={toggleMetric}
        >F</a>
      </div>
    </div>
  )
}
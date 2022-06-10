import React from 'react';
import {MdOutlineWrongLocation} from 'react-icons/md';

export default function NotFound({errorMsg}) {
  return (
    <div className='margin40 center'>
      <MdOutlineWrongLocation size={100} color='pink' className='margin40'/>
      <h2>{errorMsg}</h2>
      <p className='margin10'>Did you make a typo?</p>
    </div>
  )
}
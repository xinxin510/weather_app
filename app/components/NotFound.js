import React from 'react';

export default function NotFound({errorMsg}) {
  return (
    <div>
      <h2>{errorMsg}</h2>
      <p>Did you make a typo?</p>
    </div>
  )
}
import React from 'react';

export default function Loading({content='Loading', speed=300}) {
  const [text, setText] = React.useState(content);

  React.useEffect(() => {
      const id = setInterval(() => {
        // text === content + '...' ? setText(content) : setText(text => text + '.');
        setText(text => text === content + '...' ? content : text + '.')
      }, 1000);

      return () => clearInterval(id)

    }, [content, speed]
  )

  return (
    <div className='margin40 center'>{text}</div>
  )
}
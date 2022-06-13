import React from 'react';

export default function Loading({content='Loading', speed=200}) {
  const [text, setText] = React.useState(content);

  React.useEffect(() => {
      const id = setInterval(() => {
        // text === content + '...' ? setText(content) : setText(text => text + '.');
        setText(text => text === content + '...' ? content : text + '.')
      }, speed);

      return () => clearInterval(id)

    }, [content, speed]
  )

  return (
    <h3 className='margin40 center'>{text}</h3>
  )
}
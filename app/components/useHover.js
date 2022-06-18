import React from 'react'; 

export default function useHover() {
    const [hovering, setHovering] = React.useState(false);

    const attrs = {
        onMouseOver: () => setHovering(true),
        onMouseOut: () => setHovering(false)
    }

    return [hovering, attrs]
}
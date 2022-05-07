import React from 'react'
import createIcon from '../createSvgIcon'

const path = (
    /* eslint-disable max-len */
    <g>
        <path fill='#46b549' d='M14.608 12.001l7.308 11.992H7.31L.011 12.001 7.31 0h14.606z'/>
        <path fill='#46b549' d='M30.999 12.001L23.7 23.993l-7.307-11.992L23.7 0z'/>
    </g>

    /* eslint-enable */
);
const Cube = createIcon(path, {
    width: 32,
    height: 32,
    viewBox: '0 0 32 32'
})

export default Cube

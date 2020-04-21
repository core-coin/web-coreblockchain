import React from 'react'
import createIcon from '../createSvgIcon'

const path = (
    /* eslint-disable max-len */
    <g>
        <path
            fill='#fff'
            d='M4.207 6.566V.075h2.87v6.491h3.678l-5.113 4.575L.53 6.566zM.529 13.551h10.226v1.458H.53z'/>
    </g>

    /* eslint-enable */
);
const Download = createIcon(path, {
    width: 11,
    height: 15,
    viewBox: '0 0 11 15'
})

export default Download

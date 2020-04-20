import React from 'react'
import createIcon from '../createIcon'

const path = (
    /* eslint-disable max-len */
    <g>
        <path
            fill='#ffffff'
            d='M-.071 1.343L1.343-.07l12.728 12.728-1.414 1.414z'
        />
        <path
            fill='#ffffff'
            d='M12.657-.071l1.414 1.414L1.343 14.071-.07 12.657z'
        />
    </g>

    /* eslint-enable */
);
const Close = createIcon(path, {
    width: 14,
    height: 14,
    viewBox: '0 0 14 14'
})

export default Close
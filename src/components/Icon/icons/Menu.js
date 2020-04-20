import React from 'react'
import createIcon from '../createIcon'

const path = (
    /* eslint-disable max-len */
    <g>
        <path
            fill='#ffffff'
            d='M18 0v2H0V0zM0 5h18v2H0zm0 5h18v2H0z'
        />
    </g>

    /* eslint-enable */
);
const Menu = createIcon(path, {
    width: 18,
    height: 12,
    viewBox: '0 0 18 12'
})

export default Menu

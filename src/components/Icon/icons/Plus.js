import React from 'react'
import createIcon from '../createIcon'

const path = (
    /* eslint-disable max-len */
    <g>
        <path
            fill='#ffffff'
            d='M12.01 5.005H7.005V0h-2v5.005H0v2h5.005v5.005h2V7.005h5.005z'
        />
    </g>

    /* eslint-enable */
);
const Plus = createIcon(path, {
    width: 12,
    height: 12,
    viewBox: '0 0 12 12'
})

export default Plus

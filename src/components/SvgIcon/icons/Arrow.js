import React from 'react'
import createIcon from '../createSvgIcon'

const path = (
    /* eslint-disable max-len */
    <g>
        <path
            fill='#434359'
            d='M8.68 14.974L4.903 18.75c-.05.032-.095.063-.14.09a.794.794 0 0 1-.109.07l-.031.012c-.032 0-.134.026-.211-.013l-.096-.051h-.044l-.064-.057-3.827-3.827a.487.487 0 0 1 0-.71c.21-.209.503-.209.708 0l2.934 2.93V.8c0-.261.249-.51.51-.51.262 0 .51.249.51.51v16.33l2.916-2.916a.535.535 0 0 1 .72.05c.211.205.211.5 0 .71z'/>
    </g>

    /* eslint-enable */
);
const Arrow = createIcon(path, {
    width: 9,
    height: 19,
    viewBox: '0 0 9 19'
})

export default Arrow

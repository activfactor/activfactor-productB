import { css } from 'styled-components';

const sizes = {
    wide: 2400,
    Xlarge: 1680,
    postLarge: 1250,
    large: 1100,
    medium: 900,
    preMedium: 800,
    small: 700,
    verySmall: 560,
    mobile: 400
}

export default Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label]}px) {
            ${css(...args)};
        }
    `
    return acc
}, {})
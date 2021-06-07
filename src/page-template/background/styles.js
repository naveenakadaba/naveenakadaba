import { css } from 'styled-components';

export const generateStyles = ({ backgroundColor, backgroundImage }) => {
    const styles = [];

    styles.push(css`
        & {
            background-color: ${backgroundColor};
            background-image: url(${backgroundImage});
            background-repeat: no-repeat;
            background-size: cover;
            height: 100%;
            left: 0;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1;
        }
    `);

    return styles;
};

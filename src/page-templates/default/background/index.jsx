import React from 'react';
import PropTypes from 'prop-types';
import { generateStyles } from 'src/page-templates/default/background/styles';

const Background = (props) => {
    const {
        backgroundColor,
        backgroundImage
    } = props;

    const styles = generateStyles({
        backgroundColor,
        backgroundImage
    });

    return (
        <div css={styles} />
    );
};

Background.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired
};

export default Background;

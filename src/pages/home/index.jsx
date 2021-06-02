import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import asyncComponent from '@obstas-ui/async-component';
import { Section as SectionPlaceholder } from '@obstas-ui/placeholders';
import About from 'src/pages/home/sections/about.jsx';

const Skills = asyncComponent({
    component: () => import('src/pages/home/sections/skills.jsx'),
    fallback: () => <SectionPlaceholder height="320px" />
});

const Home = (props) => {
    const { activeTab } = props;

    return (
        <Fragment>
            {activeTab === 'about' && (
                <About {...props} />
            )}

            {activeTab === 'skills' && (
                <Skills {...props} />
            )}
        </Fragment>
    );
};

Home.propTypes = {
    activeTab: PropTypes.string.isRequired
};

export default Home;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import asyncComponent from '@obstas-ui/async-component';
import { Section as SectionPlaceholder } from '@obstas-ui/placeholders';
import About from 'src/pages/home/sections/about.jsx';

const Skills = asyncComponent({
    component: () => import('src/pages/home/sections/skills.jsx'),
    fallback: () => <SectionPlaceholder height="320px" />
});

const WorkExperience = asyncComponent({
    component: () => import('src/pages/home/sections/work-experience.jsx'),
    fallback: () => <SectionPlaceholder height="320px" />
});

const Contact = asyncComponent({
    component: () => import('src/pages/home/sections/contact.jsx'),
    fallback: () => <SectionPlaceholder height="320px" />
});

const Contributions = asyncComponent({
    component: () => import('src/pages/home/sections/contributions.jsx'),
    fallback: () => <SectionPlaceholder height="320px" />
});

const Crafts = asyncComponent({
    component: () => import('src/pages/home/sections/crafts/index.jsx'),
    fallback: () => <SectionPlaceholder height="320px" />
});

const Home = (props) => {
    const { activeTab } = props;

    return (
        <Fragment>
            {activeTab === 'about' && (
                <About {...props} />
            )}

            {activeTab === 'crafts' && (
                <Crafts {...props} />
            )}

            {activeTab === 'skills' && (
                <Skills {...props} />
            )}

            {activeTab === 'workExperience' && (
                <WorkExperience {...props} />
            )}

            {activeTab === 'contributions' && (
                <Contributions {...props} />
            )}

            {activeTab === 'contact' && (
                <Contact {...props} />
            )}
        </Fragment>
    );
};

Home.propTypes = {
    activeTab: PropTypes.string.isRequired
};

export default Home;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@obstas-ui/container';
import Card from '@obstas-ui/card';
import Text from '@obstas-ui/text';
import Spacer from '@obstas-ui/spacer';
import Tabs, { Tab } from '@obstas-ui/tabs';

const DefaultPageTemplate = (props) => {
    const { children } = props;
    const [activeTab, setActiveTab] = useState('home');

    return (
        <Container
            spacing={{
                top: 3,
                bottom: 3
            }}
            width="720px">
            <Card
                spacing={{
                    top: 2,
                    right: 2,
                    bottom: 2,
                    left: 2
                }}>
                <Text as="h1" align="center">
                    Naveena Kadaba
                </Text>

                <Spacer bottom={2}>
                    <Tabs>
                        <Tab
                            active={activeTab === 'home'}
                            title="Home"
                            onClick={(event) => {
                                event.preventDefault();
                                setActiveTab('home');
                            }}>
                            Home
                        </Tab>

                        <Tab
                            title="Skills">
                            Skills
                        </Tab>

                        <Tab
                            title="Work experience">
                            Work experience
                        </Tab>

                        <Tab
                            title="Contributions">
                            Contributions
                        </Tab>

                        <Tab
                            title="Lets talk">
                            Lets talk
                        </Tab>
                    </Tabs>
                </Spacer>

                {children}
            </Card>
        </Container>
    );
};

DefaultPageTemplate.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
};

export default DefaultPageTemplate;

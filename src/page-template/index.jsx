import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { theme } from '@obstas-ui/theme';
import Container from '@obstas-ui/container';
import Card from '@obstas-ui/card';
import Spacer from '@obstas-ui/spacer';
import Flex, { FlexItem } from '@obstas-ui/flex';
import Text from '@obstas-ui/text';
import Tabs, { Tab } from '@obstas-ui/tabs';
import backgroundImage from 'img/page-template/default/background.jpg';
import naveenakadabaImage from 'img/naveenakadaba.jpg';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${theme.colors.accent.accent3};
        background-image: url(${backgroundImage});
        background-size: cover;
    }
`;

const DefaultPageTemplate = (props) => {
    const { children } = props;
    const [activeTab, setActiveTab] = useState('home');

    return (
        <Fragment>
            <GlobalStyles />

            <Container
                spacing={{ top: 3, bottom: 3 }}
                width="80%"
                sm={{ width: '480px' }}
                md={{ width: '576px' }}
                lg={{ width: '800px' }}
                xl={{
                    spacing: { top: 5, bottom: 5 },
                    width: '66.66%'
                }}>
                <Spacer right={1} left={1}>
                    <Spacer bottom={2}>
                        <Card
                            style={{
                                border: 0,
                                boxShadow: 'none'
                            }}
                            spacing={{
                                top: 3,
                                right: 3,
                                bottom: 3,
                                left: 3
                            }}>
                            <Flex
                                direction="column"
                                justifyContent="center"
                                wrap="nowrap"
                                lg={{
                                    direction: 'row',
                                    alignItems: 'center'
                                }}>
                                <FlexItem
                                    lg={{
                                        grow: 1,
                                        spacing: { right: 1 }
                                    }}>
                                    <Spacer
                                        bottom={1}
                                        lg={{ bottom: 0 }}>
                                        <Card>
                                            <img
                                                style={{ display: 'block' }}
                                                alt="Naveena Kadaba"
                                                src={naveenakadabaImage}
                                                height="auto"
                                                width="100%"
                                            />
                                        </Card>
                                    </Spacer>
                                </FlexItem>

                                <FlexItem
                                    lg={{
                                        shrink: 0,
                                        width: '50%'
                                    }}>
                                    <Spacer
                                        lg={{ left: 3 }}>
                                        <Text as="p" size={1}>
                                            Hi, I am <Text inline={true} size={2} weight="bold">
                                                Naveena Kadaba
                                            </Text>
                                        </Text>

                                        <Text as="p" size={1} spacing={{ bottom: 0 }}>
                                            I am a JavaScript Developer based in Bangalore, India.
                                        </Text>
                                    </Spacer>
                                </FlexItem>
                            </Flex>
                        </Card>
                    </Spacer>

                    <Card
                        style={{
                            border: 0,
                            boxShadow: 'none'
                        }}
                        spacing={{
                            top: 2,
                            right: 2,
                            bottom: 2,
                            left: 2
                        }}>
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
                                    title="Let's talk">
                                    {'Let\'s talk'}
                                </Tab>
                            </Tabs>
                        </Spacer>

                        {children}
                    </Card>
                </Spacer>
            </Container>
        </Fragment>
    );
};

DefaultPageTemplate.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
};

export default DefaultPageTemplate;

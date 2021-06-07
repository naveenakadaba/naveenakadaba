import React, {
    Fragment,
    useState,
    Children,
    cloneElement
} from 'react';
import PropTypes from 'prop-types';
import Container from '@obstas-ui/container';
import Card from '@obstas-ui/card';
import Spacer from '@obstas-ui/spacer';
import Flex, { FlexItem } from '@obstas-ui/flex';
import Text from '@obstas-ui/text';
import Tabs, { Tab } from '@obstas-ui/tabs';
import Link from '@obstas-ui/link';
import Background from 'src/page-template/background/index.jsx';
import backgroundImage from 'img/page-template/default/background.jpg';
import naveenakadabaImage from 'img/naveenakadaba.jpg';
import githubIcon from 'img/icons/github.svg';
import linkedinIcon from 'img/icons/linkedin.svg';
import facebookIcon from 'img/icons/facebook.svg';

const DefaultPageTemplate = (props) => {
    const { children } = props;
    const [activeTab, setActiveTab] = useState('about');

    return (
        <Fragment>
            <Background
                backgroundColor="#0b0f58"
                backgroundImage={backgroundImage}
            />

            <Container
                style={{
                    position: 'relative',
                    zIndex: 2
                }}
                spacing={{ top: 3, bottom: 3 }}
                width="100%"
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

                                        <Text as="p" size={1} spacing={{ bottom: 2 }}>
                                            I am a JavaScript Developer based in Bangalore, India.
                                        </Text>

                                        <Flex
                                            alignItems="center"
                                            wrap="nowrap"
                                            itemSpacing={{
                                                right: 1.5
                                            }}>
                                            <FlexItem>
                                                <Link
                                                    href="https://github.com/naveenakadaba"
                                                    title="Github"
                                                    target="_blank">
                                                    <img
                                                        alt="Github"
                                                        src={githubIcon}
                                                        height="32px"
                                                        width="32px"
                                                    />
                                                </Link>
                                            </FlexItem>

                                            <FlexItem>
                                                <Link
                                                    href="https://www.linkedin.com/in/naveenakadaba"
                                                    title="LinkedIn"
                                                    target="_blank">
                                                    <img
                                                        alt="LinkedIn"
                                                        src={linkedinIcon}
                                                        height="32px"
                                                        width="32px"
                                                    />
                                                </Link>
                                            </FlexItem>

                                            <FlexItem spacing={{ right: 0 }}>
                                                <Link
                                                    href="https://www.facebook.com/naveena.kadaba/"
                                                    title="Facebook"
                                                    target="_blank">
                                                    <img
                                                        alt="Facebook"
                                                        src={facebookIcon}
                                                        height="32px"
                                                        width="32px"
                                                    />
                                                </Link>
                                            </FlexItem>
                                        </Flex>
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
                                    active={activeTab === 'about'}
                                    title="About"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setActiveTab('about');
                                    }}>
                                    About
                                </Tab>

                                <Tab
                                    active={activeTab === 'crafts'}
                                    title="Crafts"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setActiveTab('crafts');
                                    }}>
                                    Crafts
                                </Tab>

                                <Tab
                                    active={activeTab === 'skills'}
                                    title="Skills"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setActiveTab('skills');
                                    }}>
                                    Skills
                                </Tab>

                                <Tab
                                    active={activeTab === 'workExperience'}
                                    title="Work experience"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setActiveTab('workExperience');
                                    }}>
                                    Work experience
                                </Tab>

                                <Tab
                                    active={activeTab === 'contributions'}
                                    title="Contributions"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setActiveTab('contributions');
                                    }}>
                                    Contributions
                                </Tab>

                                <Tab
                                    active={activeTab === 'contact'}
                                    title="Let's talk"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setActiveTab('contact');
                                    }}>
                                    {'Let\'s talk'}
                                </Tab>
                            </Tabs>
                        </Spacer>

                        {Children.map(children, (child, index) => {
                            return cloneElement(child, {
                                key: index,
                                activeTab
                            });
                        })}
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

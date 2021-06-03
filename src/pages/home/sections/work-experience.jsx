import React from 'react';
import { margin } from '@obstas-ui/theme';
import Flex, { FlexItem } from '@obstas-ui/flex';
import Spacer from '@obstas-ui/spacer';
import Text from '@obstas-ui/text';
import tescoLogo from 'img/logos/tesco.png';
import swiggyLogo from 'img/logos/swiggy.jpg';
import coviamLogo from 'img/logos/coviam.png';
import mapplinksLogo from 'img/logos/mapplinks.jpg';

const ImageWrap = (props) => {
    return (
        <div
            style={{
                alignItems: 'center',
                display: 'flex',
                flexWrap: 'nowrap',
                height: '128px',
                width: '128px'
            }}
            {...props}
        />
    );
};

const WorkExperience = () => {
    return (
        <div style={{ ...margin({ bottom: -1 }) }}>
            <Flex
                alignItems="center"
                justifyContent="center"
                wrap="wrap"
                itemSpacing={{
                    right: 1.5,
                    bottom: 1,
                    left: 1.5
                }}>
                <FlexItem>
                    <Spacer bottom={1}>
                        <ImageWrap>
                            <img
                                alt="Tesco"
                                src={tescoLogo}
                                height="auto"
                                width="100%"
                            />
                        </ImageWrap>
                    </Spacer>

                    <Text align="center" spacing={{ bottom: 0.5 }}>Tesco</Text>
                    <Text align="center" spacing={{ bottom: 0.5 }}>SDE 2</Text>
                    <Text align="center">2+ years</Text>
                </FlexItem>

                <FlexItem>
                    <Spacer bottom={1}>
                        <ImageWrap>
                            <img
                                alt="Swiggy"
                                src={swiggyLogo}
                                height="auto"
                                width="100%"
                            />
                        </ImageWrap>
                    </Spacer>

                    <Text align="center" spacing={{ bottom: 0.5 }}>Swiggy</Text>
                    <Text align="center" spacing={{ bottom: 0.5 }}>UI Engineer 2</Text>
                    <Text align="center">1+ years</Text>
                </FlexItem>

                <FlexItem>
                    <Spacer bottom={1}>
                        <ImageWrap>
                            <img
                                alt="Coviam"
                                src={coviamLogo}
                                height="auto"
                                width="100%"
                            />
                        </ImageWrap>
                    </Spacer>

                    <Text align="center" spacing={{ bottom: 0.5 }}>Coviam</Text>
                    <Text align="center" spacing={{ bottom: 0.5 }}>Lead Engineer</Text>
                    <Text align="center">Less than a year</Text>
                </FlexItem>

                <FlexItem>
                    <Spacer bottom={1}>
                        <ImageWrap>
                            <img
                                alt="Mapplinks"
                                src={mapplinksLogo}
                                height="auto"
                                width="100%"
                            />
                        </ImageWrap>
                    </Spacer>

                    <Text align="center" spacing={{ bottom: 0.5 }}>Mapplinks</Text>
                    <Text align="center" spacing={{ bottom: 0.5 }}>Senior Web Developer</Text>
                    <Text align="center">1+ years</Text>
                </FlexItem>
            </Flex>
        </div>
    );
};

export default WorkExperience;

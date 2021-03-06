import React from 'react';
import { margin } from '@obstas-ui/theme';
import Flex, { FlexItem } from '@obstas-ui/flex';
import Spacer from '@obstas-ui/spacer';
import Text from '@obstas-ui/text';
import tescoLogo from 'img/logos/tesco.png';
import swiggyLogo from 'img/logos/swiggy.jpg';
import coviamLogo from 'img/logos/coviam.png';
import mapplinksLogo from 'img/logos/mapplinks.jpg';

const organizations = [
    {
        name: 'Tesco',
        logo: tescoLogo,
        designation: 'SDE2',
        duration: '2+ years'
    },
    {
        name: 'Swiggy',
        logo: swiggyLogo,
        designation: 'UI Engineer 2',
        duration: '1+ years'
    },
    {
        name: 'Coviam',
        logo: coviamLogo,
        designation: 'Lead Engineer',
        duration: 'Less than a year'
    },
    {
        name: 'Mapplinks',
        logo: mapplinksLogo,
        designation: 'Senior Web Developer',
        duration: '1+ years'
    }
];

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
                {organizations.map((organization, index) => {
                    return (
                        <FlexItem key={index}>
                            <Spacer bottom={1}>
                                <ImageWrap>
                                    <img
                                        alt={organization.name}
                                        src={organization.logo}
                                        height="auto"
                                        width="100%"
                                    />
                                </ImageWrap>
                            </Spacer>

                            <Text align="center" spacing={{ bottom: 0.5 }}>{organization.name}</Text>
                            <Text align="center" spacing={{ bottom: 0.5 }}>{organization.designation}</Text>
                            <Text align="center">{organization.duration}</Text>
                        </FlexItem>
                    );
                })}
            </Flex>
        </div>
    );
};

export default WorkExperience;

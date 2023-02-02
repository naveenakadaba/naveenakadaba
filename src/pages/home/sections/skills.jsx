import React from 'react';
import { margin } from '@obstas-ui/theme';
import Flex, { FlexItem } from '@obstas-ui/flex';
import Spacer from '@obstas-ui/spacer';
import Text from '@obstas-ui/text';
import reactIcon from 'img/icons/react.svg';
import nodejsIcon from 'img/icons/nodejs.svg';
import mongodbIcon from 'img/icons/mongodb.svg';
import redisIcon from 'img/icons/redis.svg';
import rabbitmqIcon from 'img/icons/rabbitmq.svg';
import haproxyIcon from 'img/icons/haproxy.svg';
import lernaIcon from 'img/icons/lerna.svg';
import webpackIcon from 'img/icons/webpack.svg';
import reduxIcon from 'img/icons/redux.svg';
import rxjsIcon from 'img/icons/rxjs.svg';
import playwrightIcon from 'img/icons/playwright.svg';

const skills = [
    {
        name: 'React',
        icon: reactIcon
    },
    {
        name: 'NodeJS',
        icon: nodejsIcon
    },
    {
        name: 'Mongo DB',
        icon: mongodbIcon
    },
    {
        name: 'Redis',
        icon: redisIcon
    },
    {
        name: 'Rabbitmq',
        icon: rabbitmqIcon
    },
    {
        name: 'HAProxy',
        icon: haproxyIcon
    },
    {
        name: 'Lerna',
        icon: lernaIcon
    },
    {
        name: 'Webpack',
        icon: webpackIcon
    },
    {
        name: 'Redux',
        icon: reduxIcon
    },
    {
        name: 'RxJS',
        icon: rxjsIcon
    },
    {
        name: 'Playwright',
        icon: playwrightIcon
    }
];

const ImageWrap = (props) => {
    return (
        <div
            style={{
                alignItems: 'center',
                border: '1px solid #d6d6d6',
                borderRadius: '5px',
                display: 'flex',
                flexWrap: 'nowrap',
                height: '128px',
                padding: '16px',
                overflow: 'hidden',
                width: '128px'
            }}
            {...props}
        />
    );
};

const Skills = () => {
    return (
        <div style={{ ...margin({ bottom: -1 }) }}>

            <Flex
                alignItems="center"
                justifyContent="flex-start"
                wrap="wrap"
                itemSpacing={{
                    right: 1.5,
                    bottom: 2,
                    left: 1.5
                }}>
                {skills.map((skill, index) => {
                    return (
                        <FlexItem key={index}>
                            <Spacer bottom={1}>
                                <ImageWrap>
                                    <img
                                        alt={skill.name}
                                        src={skill.icon}
                                        height="auto"
                                        width="100%"
                                    />
                                </ImageWrap>
                            </Spacer>

                            <Text align="center" weight="bold">{skill.name}</Text>
                        </FlexItem>
                    );
                })}
            </Flex>
        </div>
    );
};

export default Skills;

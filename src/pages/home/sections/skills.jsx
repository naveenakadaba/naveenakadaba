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

const Skills = () => {
    return (
        <div style={{ ...margin({ bottom: -1 }) }}>
            <Flex
                alignItems="flex-end"
                justifyContent="center"
                wrap="wrap"
                itemSpacing={{
                    right: 1.5,
                    bottom: 1,
                    left: 1.5
                }}>
                <FlexItem>
                    <Spacer bottom={1}>
                        <img
                            alt="React"
                            src={reactIcon}
                            height="auto"
                            width="128px"
                        />
                    </Spacer>

                    <Text align="center">React</Text>
                </FlexItem>

                <FlexItem>
                    <Spacer bottom={1}>
                        <img
                            alt="Node JS"
                            src={nodejsIcon}
                            height="auto"
                            width="128px"
                        />
                    </Spacer>

                    <Text align="center">Node JS</Text>
                </FlexItem>

                <FlexItem>
                    <Spacer bottom={1}>
                        <img
                            alt="Mongo DB"
                            src={mongodbIcon}
                            height="auto"
                            width="128px"
                        />
                    </Spacer>

                    <Text align="center">Mongo DB</Text>
                </FlexItem>

                <FlexItem>
                    <Spacer bottom={1}>
                        <img
                            alt="Redis"
                            src={redisIcon}
                            height="auto"
                            width="128px"
                        />
                    </Spacer>

                    <Text align="center">Redis</Text>
                </FlexItem>

                <FlexItem>
                    <Spacer bottom={1}>
                        <img
                            alt="Rabbitmq"
                            src={rabbitmqIcon}
                            height="auto"
                            width="128px"
                        />
                    </Spacer>

                    <Text align="center">Rabbitmq</Text>
                </FlexItem>

                <FlexItem>
                    <Spacer bottom={1}>
                        <img
                            alt="HAProxy"
                            src={haproxyIcon}
                            height="auto"
                            width="128px"
                        />
                    </Spacer>

                    <Text align="center">HAProxy</Text>
                </FlexItem>

                <FlexItem>
                    <Spacer bottom={1}>
                        <img
                            alt="Lerna"
                            src={lernaIcon}
                            height="auto"
                            width="128px"
                        />
                    </Spacer>

                    <Text align="center">Lerna</Text>
                </FlexItem>

                <FlexItem>
                    <Spacer bottom={1}>
                        <img
                            alt="Webpack"
                            src={webpackIcon}
                            height="auto"
                            width="128px"
                        />
                    </Spacer>

                    <Text align="center">Webpack</Text>
                </FlexItem>

                <FlexItem>
                    <Spacer bottom={1}>
                        <img
                            alt="Redux"
                            src={reduxIcon}
                            height="auto"
                            width="128px"
                        />
                    </Spacer>

                    <Text align="center">Redux</Text>
                </FlexItem>
            </Flex>
        </div>
    );
};

export default Skills;

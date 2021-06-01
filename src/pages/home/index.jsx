import React from 'react';
import Spacer from '@obstas-ui/spacer';
import Flex, { FlexItem } from '@obstas-ui/flex';
import Text from '@obstas-ui/text';
import telephoneIcon from 'img/telephone.png';
import gmailIcon from 'img/gmail.png';

const Home = (props) => {
    return (
        <div {...props}>
            <h6>
                Hi, I am Naveena Kadaba
            </h6>

            <Text as="p" spacing={{ bottom: 2 }}>
                I am a Full-stack JavaScript Developer based in India. I am passionate about UI and UX. I love travelling and photography.
            </Text>

            <Spacer bottom={1}>
                <Flex
                    alignItems="center"
                    wrap="nowrap">
                    <FlexItem spacing={{ right: 1 }}>
                        <img
                            style={{ display: 'block' }}
                            alt="Telephone icon"
                            src={telephoneIcon}
                            height="24px"
                            width="24px"
                        />
                    </FlexItem>

                    <FlexItem>
                        +91-9482343699
                    </FlexItem>
                </Flex>
            </Spacer>

            <Flex
                alignItems="center"
                wrap="nowrap">
                <FlexItem spacing={{ right: 1 }}>
                    <img
                        style={{ display: 'block' }}
                        alt="Gmail icon"
                        src={gmailIcon}
                        height="24px"
                        width="24px"
                    />
                </FlexItem>

                <FlexItem>
                    naveenakadaba@gmail.com
                </FlexItem>
            </Flex>
        </div>
    );
};

export default Home;

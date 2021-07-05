import React from 'react';
import Flex, { FlexItem } from '@obstas-ui/flex';
import Spacer from '@obstas-ui/spacer';
import Text from '@obstas-ui/text';
import phoneIcon from 'img/icons/phone.svg';
import emailIcon from 'img/icons/email.svg';

const Contact = () => {
    return (
        <div>
            <Text as="p">
                {'I am always excited to work on something new, mail/call me and let\'s discuss over coffee.'}
            </Text>

            <Spacer bottom={1}>
                <Flex
                    alignItems="center"
                    wrap="nowrap">
                    <FlexItem spacing={{ right: 1 }}>
                        <img
                            style={{ display: 'block' }}
                            alt="Phone"
                            src={phoneIcon}
                            height="24px"
                            width="24px"
                        />
                    </FlexItem>

                    <FlexItem>
                        {'+91-9482343699'}
                    </FlexItem>
                </Flex>
            </Spacer>

            <Flex
                alignItems="center"
                wrap="nowrap">
                <FlexItem spacing={{ right: 1 }}>
                    <img
                        style={{ display: 'block' }}
                        alt="Email"
                        src={emailIcon}
                        height="24px"
                        width="24px"
                    />
                </FlexItem>

                <FlexItem>
                    {'naveenakadaba@gmail.com'}
                </FlexItem>
            </Flex>
        </div>
    );
};

export default Contact;

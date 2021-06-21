import React from 'react';
import Flex, { FlexItem } from '@obstas-ui/flex';
import Text from '@obstas-ui/text';
import Divider from '@obstas-ui/divider';

const Contributions = () => {
    return (
        <div>
            <Text as="h6">
                {'What I\'m working on?'}
            </Text>

            <Flex
                direction="column"
                wrap="nowrap">
                <FlexItem width="100%">
                    <Text weight="bold" spacing={{ bottom: 0.5 }}>
                        {'OneCEC Clubcard'}
                    </Text>

                    <Text as="p">
                        {'Manage Tesco customer clubcard data'}
                    </Text>

                    <Divider spacing={{ bottom: 1 }} />
                </FlexItem>

                <FlexItem width="100%">
                    <Text weight="bold" spacing={{ bottom: 0.5 }}>
                        {'OneCEC Juvo'}
                    </Text>

                    <Text as="p" spacing={{ bottom: 0 }}>
                        {'Manage Tesco customer orders'}
                    </Text>
                </FlexItem>
            </Flex>
        </div>
    );
};

export default Contributions;

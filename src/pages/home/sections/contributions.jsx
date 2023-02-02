import React from 'react';
import Flex, { FlexItem } from '@obstas-ui/flex';
import Text from '@obstas-ui/text';
import Divider from '@obstas-ui/divider';

const contributions = [
    {
        title: 'Invisible App',
        description: 'Invisible App™ gives customers branded app-like experiences but saves businesses from having to build, test, deploy and support traditional mobile applications and their infrastructure.'
    },
    {
        title: 'Invisible Portal',
        description: 'Secure, automated and easy to build. Gone are the days of resorting to email or complex portals for data, document and file exchange.'
    }
];

const Contributions = () => {
    const totalContributions = contributions.length;

    return (
        <div>
            <Flex
                direction="column"
                wrap="nowrap">
                {contributions.map((contribution, index) => {
                    return (
                        <FlexItem key={index} width="100%">
                            <Text weight="bold" spacing={{ bottom: 0.5 }}>
                                {contribution.title}
                            </Text>

                            <Text as="p">
                                {contribution.description}
                            </Text>

                            {index < totalContributions - 1 && (
                                <Divider spacing={{ bottom: 1 }} />
                            )}
                        </FlexItem>
                    );
                })}
            </Flex>
        </div>
    );
};

export default Contributions;

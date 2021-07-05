import React from 'react';
import Flex, { FlexItem } from '@obstas-ui/flex';
import Text from '@obstas-ui/text';
import Divider from '@obstas-ui/divider';

const contributions = [
    {
        title: 'OneCEC Clubcard',
        description: 'Tesco customer clubcard app'
    },
    {
        title: 'OneCEC Juvo',
        description: 'Tesco customer orders app'
    },
    {
        title: 'Swiggy Partner App',
        description: 'Restaurant portal'
    },
    {
        title: 'Baba Fattoosh',
        description: 'Food delivery app'
    },
    {
        title: 'The Fuller Life',
        description: 'Health and Wellness app'
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

            <Text as="p" spacing={{ bottom: 0 }}>
                ...and many more.
            </Text>
        </div>
    );
};

export default Contributions;

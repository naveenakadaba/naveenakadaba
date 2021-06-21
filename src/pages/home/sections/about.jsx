import React from 'react';
import Text from '@obstas-ui/text';

const About = () => {
    return (
        <div>
            <Text as="p">
                {'I live in Bangalore, India working full time as a JavaScript developer. I\'ve been building stuff on the web for the last 8 years, working with multiple organizations.'}
            </Text>

            <Text as="p">
                {'I like to code things from scratch, and enjoy bringing ideas to life in the browser. I absolutely love learning new things and taking on new challenges.'}
            </Text>

            <Text as="p" spacing={{ bottom: 0 }}>
                {'I believe in quality not in quantity.'}
            </Text>
        </div>
    );
};

export default About;

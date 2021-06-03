import React from 'react';
import Text from '@obstas-ui/text';
import Spacer from '@obstas-ui/spacer';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';
import {
    createEpic as createEpicCodeBlock,
    createReducer as createReducerCodeBlock,
    asyncComponent as asyncComponentCodeBlock
} from 'src/pages/home/sections/code-blocks.js';

SyntaxHighlighter.registerLanguage('javascript', js);

const Crafts = () => {
    return (
        <div>
            <Text as="h6">
                Obstas UI Framework
            </Text>

            <Text as="p">
                {'A framework built on top of React. It utilizes the power of Redux, Styled Components, and RxJS.'}
            </Text>

            <Text as="p">
                {'This framework makes the life easier. Let\'s look at an example:'}
            </Text>

            <Text as="p" weight="bold" spacing={{ bottom: 0.5 }}>
                {'Creating an epic:'}
            </Text>

            <Spacer bottom={1}>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {createEpicCodeBlock}
                </SyntaxHighlighter>
            </Spacer>

            <Text as="p" weight="bold" spacing={{ bottom: 0.5 }}>
                {'Creating an reducer:'}
            </Text>

            <Spacer bottom={1}>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {createReducerCodeBlock}
                </SyntaxHighlighter>
            </Spacer>

            <Text as="p" weight="bold" spacing={{ bottom: 0.5 }}>
                {'Loading component on demand:'}
            </Text>

            <Spacer bottom={1}>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {asyncComponentCodeBlock}
                </SyntaxHighlighter>
            </Spacer>
        </div>
    );
};

export default Crafts;

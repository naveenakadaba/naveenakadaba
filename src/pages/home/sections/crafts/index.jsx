import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';
import Text from '@obstas-ui/text';
import Spacer from '@obstas-ui/spacer';
import {
    createEpic as createEpicCodeBlock,
    createReducer as createReducerCodeBlock,
    asyncComponent as asyncComponentCodeBlock,
    dispatchAction as dispatchActionCodeBlock,
    spacer as spacerCodeBlock,
    text as textCodeBlock,
    flex as flexCodeBlock
} from 'src/pages/home/sections/crafts/code-blocks.js';

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

            <Text as="p" spacing={{ bottom: 2 }}>
                {'This framework makes the frontend development easier. Let\'s look at some of the code snippets:'}
            </Text>

            <Text as="p" weight="bold" spacing={{ bottom: 0.5 }}>
                {'Creating an epic:'}
            </Text>

            <Spacer bottom={2}>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {createEpicCodeBlock}
                </SyntaxHighlighter>
            </Spacer>

            <Text as="p" weight="bold" spacing={{ bottom: 0.5 }}>
                {'Creating an reducer:'}
            </Text>

            <Spacer bottom={2}>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {createReducerCodeBlock}
                </SyntaxHighlighter>
            </Spacer>

            <Text as="p" weight="bold" spacing={{ bottom: 0.5 }}>
                {'Loading component on demand (Code splitting):'}
            </Text>

            <Spacer bottom={2}>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {asyncComponentCodeBlock}
                </SyntaxHighlighter>
            </Spacer>

            <Text as="p" weight="bold" spacing={{ bottom: 0.5 }}>
                {'Dispatching action:'}
            </Text>

            <Spacer bottom={2}>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {dispatchActionCodeBlock}
                </SyntaxHighlighter>
            </Spacer>

            <Text as="p" weight="bold" spacing={{ bottom: 0.5 }}>
                {'Spacer component:'}
            </Text>

            <Spacer bottom={2}>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {spacerCodeBlock}
                </SyntaxHighlighter>
            </Spacer>

            <Text as="p" weight="bold" spacing={{ bottom: 0.5 }}>
                {'Text component:'}
            </Text>

            <Spacer bottom={2}>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {textCodeBlock}
                </SyntaxHighlighter>
            </Spacer>

            <Text as="p" weight="bold" spacing={{ bottom: 0.5 }}>
                {'Flex component:'}
            </Text>

            <SyntaxHighlighter language="javascript" style={docco}>
                {flexCodeBlock}
            </SyntaxHighlighter>
        </div>
    );
};

export default Crafts;

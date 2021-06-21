export const createEpic = `
    import createEpic from '@obstas-ui/create-epic';
        
    export default [
        createEpic(
            'signinPage/API_SIGNIN',
            '/api/v1/token',
            'post'
        )
    ];
`;

export const createReducer = `
    import { combineReducers } from 'redux';
    import createReducer from '@obstas-ui/create-reducer';

    const reducer = combineReducers({
        signinRequest: createReducer('signinPage/API_SIGNIN')
    });

    export default {
        signinPage: (state, action) => {
            switch (action.type) {
                case 'signinPage/RESET_STATE': {
                    return reducer({
                        signinRequest: {}
                    }, action);
                }

                default: {
                    return reducer(state, action);
                }
            }
        }
    };
`;

export const asyncComponent = `
    import asyncComponent from '@obstas-ui/async-component';
        
    const Signin = asyncComponent({
        component: () => import('src/pages/signin/index.jsx'),
        reducers: () => import('src/pages/signin/reducers'),
        epics: () => import('src/pages/signin/epics'),
        fallback: () => <PagePlaceholder />
    });

    <Route path="/signin" exact={true} component={(props) => (
        <PreLoginFormTemplate>
            <Signin {...props} />
        </PreLoginFormTemplate>
    )} />
`;

export const dispatchAction = `
    import { store } from '@obstas-ui/core';
        
    store.dispatch({
        type: actionTypes.SIGNIN,
        payload: {
            body: {
                email: 'email',
                password: 'password'
            }
        }
    });
`;

export const spacer = `
    import Spacer from '@obstas-ui/spacer';

    //Margin bottom = 1rem
    <Spacer bottom={1}>
        <span>Spacer</span>
    </Spacer>

    //Margin bottom = 1rem when screen size is below lg 
    //Margin bottom = 2rem when screen size is above lg
    <Spacer bottom={1} lg={{ bottom: 2 }}>
        <span>Spacer</span>
    </Spacer>

    //Padding bottom = 1rem
    <Spacer type="padding" bottom={1}>
        <span>Spacer</span>
    </Spacer>
`;

export const text = `
    import Text from '@obstas-ui/text';

    //Size is calculated based on MajorThird modular scale
    //Size = 1 = modularScale(1, '1rem', 'majorThird')
    //Size = 2 = modularScale(2, '1rem', 'majorThird')
    <Text
        size={1}
        weight="bold"
        italic={true}
        inline={false}
    />
`;

export const flex = `
    import Flex, { FlexItem } from '@obstas-ui/flex';
    
    //Horizontal
    //Spacing = Margin added around flex container
    //Item Spacing = Margin added around flex items
    //Remove all the margins when screen size is above lg
    <Flex
        alignItems="center"
        wrap="nowrap"
        spacing={{ bottom: 1 }}
        itemSpacing={{ bottom: 1 }}
        lg={{
            spacing: { bottom: 0 },
            itemSpacing: { bottom: 0 }
        }}>
        <FlexItem>FlexItem 1</FlexItem>
        <FlexItem>FlexItem 2</FlexItem>
    </Flex>

    //Vertical
    <Flex
        direction="column">
        <FlexItem>FlexItem 1</FlexItem>
        <FlexItem>FlexItem 2</FlexItem>
    </Flex>
`;

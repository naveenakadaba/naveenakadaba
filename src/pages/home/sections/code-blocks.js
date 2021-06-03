export const createEpic = `
    import createEpic from '@obstas-ui/create-epic'
        
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

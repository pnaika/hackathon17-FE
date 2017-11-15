// styles
import './_app/styles/index.scss';

// dependencies
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

// routes
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import history from './_app/history';
import AuthenticatedRoutesWrapper from './Auth/AuthenticatedRoutesWrapper';

// store
import store from './_app/store';

//components
import {HomePage} from './HomePage';
import { DataBlock } from './DataBlock';
import { PartDetails } from './PartDetails';
import {Main} from './Main';

const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route exact
                           strict
                           path="/"
                           component={HomePage}
                    />
                    <AuthenticatedRoutesWrapper shellComponent={Main}>
                        <Switch>
                            <Route exact
                                   strict
                                   path="/data-block"
                                   component={DataBlock}
                            />
                            <Route exact
                                   strict
                                   path="/part-details/:id"
                                   component={PartDetails}
                            />
                        </Switch>
                    </AuthenticatedRoutesWrapper>
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;
export const htmlContainer = document.querySelector('#app');

if (process.env.NODE_ENV !== 'development') {
    render(<App/>, htmlContainer);
}

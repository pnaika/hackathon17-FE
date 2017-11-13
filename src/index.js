// dependencies
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// routes
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './_app/history';

// store
import store from './_app/store';

//components
import { HomePage } from './HomePage';
import Dummy from './TestComp';

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
                    <Route exact
                           strict
                           path="/see-me"
                           component={Dummy}
                    />
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

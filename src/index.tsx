import * as React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';

import App from './containers/App';
import store from './store';

const rootEl = document.getElementById('root');
render(
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>,
    rootEl
);

if ('hot' in module) {
    module['hot']['accept']('./containers/App', () => {
        const NextApp = require('./containers/App').default;
        render(
            <AppContainer>
                <Provider store={store}>
                    <NextApp />
                </Provider>
            </AppContainer>,
            rootEl
        );
    });
}

import * as React from 'react';
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from "../../utils/history";
import configureStore from "../../store/configureStore";

import Hello from "../../components/hello/Hello";
import {Store} from "redux";

interface AppProps {}

const store: Store = configureStore();

export default function ({ }: AppProps) {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Hello compiler="typescript" framework="react" />
            </Router>
        </Provider>
    );
}

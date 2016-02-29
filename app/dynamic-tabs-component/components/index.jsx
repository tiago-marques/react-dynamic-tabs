/*@flow*/
'use strict';
import React from 'react';
import Content from './content/index.jsx';
import DynamicTabs from './dynamic-tabs/index.jsx';

import { Provider } from 'react-redux'
import createStore from '../lib/createStore';

const store = createStore();


export default class DynamicTabsComponent extends React.Component {
  render() {
    return (
        <section>
            <div className='tabs tabs-style-tzoid'>
                <nav>
                    <Provider store={store}>
                        <DynamicTabs />
                    </Provider>
                </nav>
                <Content/>
            </div>
        </section>
    );
  }
}
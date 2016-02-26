/*@flow*/
'use strict';
import React from 'react';
import Content from './content/index.jsx';
import DynamicTabs from './dynamic-tabs/index.jsx';

export default class DynamicTabsComponent extends React.Component {
  render() {
    return (
        <section>
            <div className='tabs tabs-style-tzoid'>
                <nav>
                    <DynamicTabs/>
                </nav>
                <Content/>
            </div>
        </section>
    );
  }
}
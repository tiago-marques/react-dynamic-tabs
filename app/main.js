/*@flow*/
'use strict';

//static
import './static/tabs.css';
import './static/tabstyles.css';
import './static/pe-icon-7-stroke/css/helper.css';
import './static/pe-icon-7-stroke/css/pe-icon-7-stroke.css';
import 'file?name=fonts/[name].[ext]!./static/pe-icon-7-stroke/fonts/Pe-icon-7-stroke.eot';
import 'file?name=fonts/[name].[ext]!./static/pe-icon-7-stroke/fonts/Pe-icon-7-stroke.svg';
import 'file?name=fonts/[name].[ext]!./static/pe-icon-7-stroke/fonts/Pe-icon-7-stroke.ttf';
import 'file?name=fonts/[name].[ext]!./static/pe-icon-7-stroke/fonts/Pe-icon-7-stroke.woff';

//Dynamic Tabs Component
import React from 'react';
import ReactDOM from 'react-dom';
import DynamicTabsComponent from './dynamic-tabs-component/index.jsx';

ReactDOM.render(
  <DynamicTabsComponent/>,
  document.getElementById('react-dynamic-tabs')
);
/*@flow*/
'use strict';
import React from 'react';
import reactMixin from 'react-mixin';
import LocalStorageState from 'react-localstorage';
import SortableMixin from './lib/sortablemixin';

import * as TabsActions from '../../actions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import _ from 'lodash';

//TODO - implement component tab.
//import Tab from './tab';


@connect(({ TabsStore }) => ({ TabsStore }))
@reactMixin.decorate(SortableMixin)
//@reactMixin.decorate(LocalStorageState)
export default class DynamicTabs extends React.Component {
   
    static propTypes = {
        //tabs: React.PropTypes.object.isRequired
    }
    
    setTabCurrent = (item) => {
        const { dispatch } = this.props;
        const actions = bindActionCreators(TabsActions, dispatch);
        actions.toogleTab(item.id);
    }
    
    componentWillMount = () => {
        const {TabsStore} = this.props;
        const tabs = TabsStore.get('tabs').toJS();
        this.setState({
            tabs: tabs
        });
    }
    componentWillUpdate = (nextProps, nextState) => {
        if(!_.isEqual(nextState.tabs, this.state.tabs)){
            const { dispatch } = this.props;
            const actions = bindActionCreators(TabsActions, dispatch);
            actions.changeTabOrder(nextState.tabs);
        }
    }
    
    componentWillReceiveProps = (nextProps) => {
        const {TabsStore} = nextProps;
        const tabs = TabsStore.get('tabs').toJS();
        this.setState({
            tabs: tabs
        });
    }
    
    render(){
        return (
            <ul>
                <div draggable={false} className={'tab-current menuofftabs'}><a><i className={'pe-7s-more'}/></a></div>
                {
                this.state.tabs.map((item, index) => {
                    return (
                        <li id={item.id} 
                            onClick={this.setTabCurrent.bind(this,item)} 
                            key={index} 
                            className={item.selected ? 'tabd tab-current':'tabd'}>
                            <a>
                                <i className={item.icon}/>
                                <span style={{marginRight: 15,marginLeft: 5}}>{item.text}</span>
                            </a>
                        </li>
                    )
                })
            }</ul>
        );
    }
};


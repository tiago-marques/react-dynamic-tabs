/*@flow*/
'use strict';
import React from 'react';
import reactMixin from 'react-mixin';
import LocalStorageState from 'react-localstorage';
import SortableMixin from './lib/sortablemixin';
//TODO - implement component tab.
//import Tab from './tab';

/**
 * This layout demonstrates how to use static grid elements.
 * Static elements are not draggable or resizable, and cannot be moved.
 */
@reactMixin.decorate(SortableMixin)
@reactMixin.decorate(LocalStorageState)
export default class DynamicTabs extends React.Component {
    state = {
        selectedId: 0,
        items: [
            {id: 0,text:'Notícias',icon:'pe-7s-global'},
            {id: 1,text:'Dicas Saudáveis',icon:'pe-7s-leaf'},
            {id: 2,text:'Minha Saúde', icon:'pe-7s-like'},
            {id: 3,text:'Exames',icon:'pe-7s-note2'},
            {id: 4,text:'SOS Sangue',icon:'pe-7s-drop'},
            {id: 5,text:'Meus Treinos',icon:'pe-7s-gym'},
            {id: 6,text:'Meus Remédios',icon:'pe-7s-bandaid'},
            {id: 7,text:'Vacinas', icon:'pe-7s-eyedropper'}
        ]
    };

    setTabCurrent = (event) => {
        this.setState({ selectedId: parseInt(event.currentTarget.id)});
    };
    
    handleSort(/** Event */evt) { /*..*/ };
    
    render(){
        return (
            <ul>
                <div draggable={false} className={'tab-current menuofftabs'}><a><i className={'pe-7s-more'}/></a></div>
                {
                this.state.items.map(function (item, index) {
                    if(item)
                    return (
                        <li id={item.id} 
                            onClick={this.setTabCurrent} 
                            key={index} 
                            className={this.state.selectedId === item.id ? 'tabd tab-current':'tabd'}>
                            <a>
                                <i className={item.icon}/>
                                <span style={{marginRight: 15,marginLeft: 5}}>{item.text}</span>
                            </a>
                        </li>
                    )
                }.bind(this))
            }</ul>
        );
    }
};


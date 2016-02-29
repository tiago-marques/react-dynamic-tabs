import createReducer from '../lib/createReducer';
import Immutable from 'immutable';
import * as types from '../constants/ActionTypes';

const initialState = Immutable.fromJS({
  tabs: [
    {id: 0,text:'Notícias',icon:'pe-7s-global', selected: true},
    {id: 1,text:'Dicas Saudáveis',icon:'pe-7s-leaf', selected: false},
    {id: 2,text:'Minha Saúde', icon:'pe-7s-like', selected: false},
    {id: 3,text:'Exames',icon:'pe-7s-note2', selected: false},
    {id: 4,text:'SOS Sangue',icon:'pe-7s-drop', selected: false},
    {id: 5,text:'Meus Treinos',icon:'pe-7s-gym', selected: false},
    {id: 6,text:'Meus Remédios',icon:'pe-7s-bandaid', selected: false},
    {id: 7,text:'Vacinas', icon:'pe-7s-eyedropper', selected: false}
  ]
});


export default createReducer(initialState, {
  [types.TOGGLE_TAB](state, { id }) {
    const newState = state.update('tabs', (tabs) =>
    tabs.map((tab) => tab.set('selected', tab.get("id") === id)));
    return newState;
  },

  [types.CHANGE_TAB_ORDER](state, { tabsReceive }) {
    console.log(tabsReceive);
    const newState = state.update('tabs', (tabs) =>
    tabs.map((tab, index) => { 
        if(tab.get("id") !== tabsReceive[index].id){
            return Immutable.fromJS(tabsReceive[index]);
        }
        return tab;
    }));
    console.log(newState.get('tabs').toJS());
    return newState;

  }

});

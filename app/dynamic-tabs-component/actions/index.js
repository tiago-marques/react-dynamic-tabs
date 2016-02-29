import * as types from '../constants/ActionTypes';

export function toogleTab(id) {
  return {
    type: types.TOGGLE_TAB,
    id
  };
}

export function changeTabOrder(tabsReceive) {
  return {
    type: types.CHANGE_TAB_ORDER,
    tabsReceive
  };
}
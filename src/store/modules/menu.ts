/**
 * 菜单
 */

import { ActionTree, MutationTree } from 'vuex'
import service from '../../api'

interface State {
  fetch: boolean;
  list: StoreState.Menu[];
  total: number;
}
const REQUEST_LIST = 'REQUEST_LIST';
const REQUEST_LIST_SUCCESS = 'REQUEST_LIST_SUCCESS';
const REQUEST_LIST_FAIL = 'REQUEST_LIST_FAIL';

const state: State = {
  fetch: false,
  list: [],
  total: 0
}

const mutations: MutationTree<State> = {
  [REQUEST_LIST] (state: State): void {
    state.fetch = true
  },

  [REQUEST_LIST_SUCCESS] (
    state: State,
    payload: { list: StoreState.Menu[], total: number }
  ): void {
    state.fetch = false
    state.list = payload.list
    state.total = payload.total
  },

  [REQUEST_LIST_FAIL] (state: State): void {
    state.fetch = false
    state.list = []
    state.total = 0
  }
}

const actions: ActionTree<State, any> = {

  // 获取列表
  async getMenus (
    { commit },
    data: {lang: string}
  ): Promise<Ajax.AjaxResponse> {

    commit(REQUEST_LIST)
    const res: Ajax.AjaxResponse = await service.getMenus(data)
    if (res && res.code === 1) {
      const list: StoreState.Menu[] = res.result.list.map((item: StoreState.Menu) => {
        return { ...item, deleteing: false }
      })
      const total: number = res.result.pagination.total

      commit(REQUEST_LIST_SUCCESS, { list, total })
    } else {

      commit(REQUEST_LIST_FAIL)
    }
    return res
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}

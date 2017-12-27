import 'babel-polyfill'
import Vue from 'vue'
import Vuex, { ActionTree, MutationTree } from 'vuex'

import menu from './modules/menu'

import service from '../api'

Vue.use(Vuex)

interface State {
  tpVersion: string;
  serialNumber: string;
  controllerModel: string;
  controllerVersion: string;
}

const state: State = {
  tpVersion: '',
  serialNumber: '',
  controllerModel: '',
  controllerVersion: ''
}
const TPVERSION_INFO = 'TPVERSION_INFO'
const SERIALNUMBER_INFO = 'SERIALNUMBER_INFO'
const CONTROLLERMODEL_INFO = 'CONTROLLERMODEL_INFO'
const CONTROLLERVERSION_INFO = 'CONTROLLERVERSION_INFO'

const mutations: MutationTree<State> = {
  [TPVERSION_INFO] (state: State,tpVersion: string): void {
    state.tpVersion = tpVersion
  },

  [SERIALNUMBER_INFO] (state: State,serialNumber: string): void {
    state.serialNumber = serialNumber
  },

  [CONTROLLERMODEL_INFO] (state: State,controllerModel: string): void {
    state.controllerModel = controllerModel
  },

  [CONTROLLERVERSION_INFO] (state: State,controllerVersion: string): void {
    state.controllerVersion = controllerVersion
  }
}

const actions: ActionTree<State, any> = {
  // 获取tp版本信息
  async getTpVersion ({ commit }): Promise<void> {
    const res: Ajax.AjaxResponse = await service.getTpVersion()
    if (res) {
      commit(TPVERSION_INFO, res)
    }
  },
  // 获取tp版本信息
  async getSerialNumber ({ commit }): Promise<void> {
    const res: Ajax.AjaxResponse = await service.getSerialNumber()
    if (res) {
      commit(SERIALNUMBER_INFO, res)
    }
  },
  // 获取tp版本信息
  async getControllerModel ({ commit }): Promise<void> {
    const res: Ajax.AjaxResponse = await service.getControllerModel()
    if (res) {
      commit(CONTROLLERMODEL_INFO, res)
    }
  },
  // 获取tp版本信息
  async getControllerVersion ({ commit }): Promise<void> {
    const res: Ajax.AjaxResponse = await service.getControllerVersion()
    if (res) {
      commit(CONTROLLERVERSION_INFO, res)
    }
  }
}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    menu
  }
})

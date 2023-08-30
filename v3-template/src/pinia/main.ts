import {defineStore} from 'pinia';

interface State {
  tagsList: any[];
}

const defaultState: State = {
  tagsList: [],
};

export const mainStore = defineStore('main', {
  state: () => {
    return defaultState;
  },
  getters: {},
  actions: {},
});

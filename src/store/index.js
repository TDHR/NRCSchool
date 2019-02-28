import vue from 'vue';
import vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

vue.use(vuex);

const state = {
    user:''
};

const store = new vuex.Store({
    state,
    getters,
    actions,
    mutations
});

export default store;
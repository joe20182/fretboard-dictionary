import Vue from 'vue'
import Vuex from 'vuex'
import config from './store/modules/config'
import getters from './store/getters'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		config
    },
    getters
})
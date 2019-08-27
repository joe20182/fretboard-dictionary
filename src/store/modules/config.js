const config = {
	state: {
		key: null,
        length: 22,
        keyMap: ['C', '#C', 'D', '#D', 'E', 'F', '#F', 'G', '#G', 'A', '#A', 'B']
	},
	mutations: {
		SET_KEY: (state, val) => {
			state.key = val
		},
		SET_LENGTH: (state, val) => {
			state.length = val
		}
	},
	actions: {
		ChangeKey({commit}, key) {
            if (key === this.key) {
                commit('SET_KEY', null)
            } else {
                commit('SET_KEY', key)
            }
		},
		ChangeFret({commit}, len) {
			commit('SET_LENGTH', len)
		}
	}
}

export default config
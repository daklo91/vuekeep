import AxiosLogic from '@/services/AxiosLogic.js'

const labels = {
  namespaced: true,
  state: {
    labels: []
  },
  mutations: {
    SET_LABELS(state, data) {
      state.labels = data
    },
    ADD_LABEL(state, payload) {
      state.labels.push(payload)
    }
  },
  actions: {
    loadLabels({ commit }) {
      AxiosLogic.getLabels()
        .then(res => {
          commit('SET_LABELS', res.data)
        })
        .catch(error => console.log(error))
    },
    postLabel({ commit }, payload) {
      return AxiosLogic.postLabel(payload).then(() => {
        commit('ADD_LABEL', payload)
      })
    }
  }
}

export default labels

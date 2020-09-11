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
    },
    DELETE_LABEL(state, index) {
      state.labels.splice(index, 1)
    },
    RENAME_LABEL(state, payload) {
      let newTitle = payload.newTitle
      let index = payload.index
      state.labels[index].title = newTitle
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
      return AxiosLogic.postLabel(payload)
        .then(() => {
          commit('ADD_LABEL', payload)
        })
        .catch(error => console.log(error))
    },
    deleteLabel({ commit }, payload) {
      return AxiosLogic.deleteLabel(payload.id)
        .then(() => {
          commit('DELETE_LABEL', payload.index)
        })
        .catch(error => console.log(error))
    },
    renameLabel({ commit }, payload) {
      return AxiosLogic.patchLabel(payload.id, { title: payload.newTitle })
        .then(res => {
          console.log(res)
          commit('RENAME_LABEL', payload)
        })
        .catch(error => console.log(error))
    }
  }
}

export default labels


const state = () => ({
  webId: null,
  logged: false,
  test: "TEST OK",
  storage: "todo storage"
})
//const getters = {}
//const actions = {}
const mutations = {
  setWebId(state, webId){
    console.log("setWebId",webId)
    state.webId = webId
  },
}

export default {
  namespaced: true,
  state,
//  getters,
  //actions,
  mutations
}

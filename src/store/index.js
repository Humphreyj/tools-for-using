import { createStore } from 'vuex'
import standardImg from '@/assets/standard.svg'

export default createStore({
  state: {
    tools: [
      {
        id: 0,
        name: 'standard',
        img: standardImg
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

import { mount } from '@vue/test-utils'
import Tools from '@/components/home/Tools.vue'
import standardImg from '@/assets/standard.svg'
import { createStore } from 'vuex'

describe('Tools.vue', () => {
  const initialState = {
    tools: [
      {
        id: 0,
        name: 'standard',
        img: standardImg
      }
    ]
  }
  let mocked
  let store
  beforeEach(() => {
    mocked = jest.fn()
    store = createStore({
      state: initialState
    })
  })
  test('renders the array', async () => {
    const wrapper = mount(Tools, {
      global: { plugins: [store] }
    })
    expect(wrapper.find('.name').text()).toBe('standard')
  })
})

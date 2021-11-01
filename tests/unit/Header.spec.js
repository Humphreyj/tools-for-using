import { mount } from '@vue/test-utils'
import Header from '@/components/home/Header.vue'
import VueRouter from 'vue-router'

describe('Header.vue', () => {
  it('renders the header components', () => {
    const wrapper = mount(Header, {
      plugins: [VueRouter]
    })
    expect(wrapper.find('.logo').text()).toBe("Tools y'all")
    expect(wrapper.find('.nav').find('.link-home').text()).toBe('Home')
  })
})

import { shallowMount } from '@vue/test-utils'
import Login from '@/views/Login.vue'

describe('Login view', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(Login);

    expect(wrapper.text()).toMatch("Login page");
  })
})

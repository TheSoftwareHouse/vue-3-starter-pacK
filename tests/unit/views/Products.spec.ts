import { shallowMount } from '@vue/test-utils'
import Products from '@/views/Products.vue'

describe('Products view', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(Products);

    expect(wrapper.text()).toMatch("Products page");
  })
})

/* eslint-disable */ 
import Vue from 'vue'
import Cell from '@/components/Cell'

describe('Cell.vue', () => {

  let Constructor;
  beforeEach(() => {
    Constructor = Vue.extend(Cell);
  });
  it('should render contents as a div', () => {
    const vm = new Constructor().$mount();
    expect(vm.$el.nodeName).to.equal('DIV');
  });

  it('should render correct contents as ""', () => {
    const vm = new Constructor().$mount();

    expect(vm.$el.textContent)
    .to.equal('')
  });

  it('should render correct contents as X', () => {
    const propsData = {token: 'X'};
    const vm = new Constructor({ propsData }).$mount();

    expect(vm.$el.textContent)
    .to.equal('X')
  });

})

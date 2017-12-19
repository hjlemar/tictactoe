import Vue from 'vue';
import CellGrid from '@/components/CellGrid';
import Cell from '@/components/Cell';
import { mount } from 'vue-test-utils';

describe('CellGrid.vue', () => {
  let Constructor;
  beforeEach(() => {
    Constructor = Vue.extend(CellGrid);
  });

  it('has 9 cells and 9 children', () => {
    const propsData = { cells: Array.from({ length: 9 }) };
    const vm = new Constructor({ propsData }).$mount();

    expect(vm.cells.length).toEqual(9);
    expect(vm.$el.children.length).toEqual(9);
  });

  it('emits a cellSelected event with i = 2', () => {
    const propsData = { cells: Array.from({ length: 9 }) };
    const wrapper = mount(CellGrid, {
      propsData
    });

    wrapper.vm.cellSelected(2);
    const event = wrapper.emitted().cellSelected;
    expect(event).toBeDefined();
    expect(event.length).toBe(1);
    expect(event[0][0]).toBe(2);
  });
},
);

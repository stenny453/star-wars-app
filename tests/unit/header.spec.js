/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */

import { shallowMount } from '@vue/test-utils';
import AppHeader from '@/components/AppHeader.vue';

describe('AppHeader.vue', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(AppHeader, {
      props: {
        title: 'My App',
        paths: [
          {
            index: 0,
            link: '/',
            name: 'Movies',
          },
          {
            index: 1,
            link: '/classic-movies',
            name: 'Classics',
          },
        ],
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('props well received', () => {
    const wrapper = shallowMount(AppHeader, {
      props: {
        title: 'My App',
        paths: [
          {
            index: 0,
            link: '/',
            name: 'Movies',
          },
          {
            index: 1,
            link: '/classic-movies',
            name: 'Classics',
          },
        ],
      },
    });

    // check if props well passed
    expect(wrapper.props().title).toBe('My App');

    // check if paths well passed
    expect(wrapper.props().paths).toEqual([
      {
        index: 0,
        link: '/',
        name: 'Movies',
      },
      {
        index: 1,
        link: '/classic-movies',
        name: 'Classics',
      },
    ]);

    // check if title of app is equal to props title
    expect(wrapper.find('.header-title').text()).toBe('My App');
  });
});

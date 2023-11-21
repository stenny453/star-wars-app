/* eslint-disable import/no-extraneous-dependencies */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Vuesax from 'vuesax3';
import App from './App.vue';
import router from './router';

import 'vuesax3/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';

const pinia = createPinia();

createApp(App)
  .use(Vuesax, {
    theme: {
      colors: {
        primary: '#5b3cc4',
        success: 'rgb(23, 201, 100)',
        danger: 'rgb(242, 19, 93)',
        warning: 'rgb(255, 130, 0)',
        dark: 'rgb(36, 33, 69)',
      },
    },
  })
  .use(router)
  .use(pinia)
  .mount('#app');

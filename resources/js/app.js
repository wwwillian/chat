/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import store from './store/store';

// Vue.component('example-component', require('./components/chat/ExampleComponent.vue'));
Vue.component('chat', require('./components/chat/Chat').default);
Vue.component('users', require('./components/chat/Users').default);
Vue.component('messages', require('./components/chat/Messages').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    store,
    el: '#app',
});

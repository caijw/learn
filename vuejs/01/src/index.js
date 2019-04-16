import Vue from 'vue';

window.Vue = Vue;
// import App from './App.vue';


const ins = new Vue({
  el: '#app',
  data: {
    text: 'message',
    text1: 'message1'
  },
  template: '<div id="foo">{{text1}}</div>'
});
console.log(document.getElementById('link-box').innerHTML)


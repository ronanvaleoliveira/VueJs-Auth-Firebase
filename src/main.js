import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDhG17sDt57HJOH3oyUiwzMELC6PiL4NJ0",
  authDomain: "rvo-vue-auth-firebase.firebaseapp.com",
  databaseURL: "https://rvo-vue-auth-firebase.firebaseio.com",
  projectId: "rvo-vue-auth-firebase",
  storageBucket: "rvo-vue-auth-firebase.appspot.com",
  messagingSenderId: "271079180487",
  appId: "1:271079180487:web:968f450ecc86ca2efe16e2",
  measurementId: "G-6VD5FGF25D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

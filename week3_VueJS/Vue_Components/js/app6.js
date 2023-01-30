import Counter from "./counter4.js"

const app = Vue.createApp({
  components : {
    Counter : Counter
  },
  template : "<Counter start='10'/>",

})

var vm = app.mount("div#app");

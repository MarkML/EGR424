import Counter from "./counter3.js"

var app = Vue.createApp({
  components : {
    Counter : Counter
  },
  template : '<Counter />'
});

var vm = app.mount("div#app");
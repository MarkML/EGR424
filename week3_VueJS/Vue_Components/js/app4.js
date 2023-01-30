//inserting a component from an external file
import Counter from "./counter2.js";

const app = Vue.createApp({
  components : {
    Counter : Counter
  },
  template : "<Counter />"
});

const vm = app.mount("div#app");
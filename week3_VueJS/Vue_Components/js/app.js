//Reactive variables refer to variables that are dynamic in the data() object
// when the variable value changes in memory it also changes in the html whereever it is being displayed

const app = Vue.createApp({
  template : "the counter is: {{ count }}",
  data() { 
    return {
      count : 0
    }
  }
});

const vm = app.mount("#app");

setInterval(function() {
  vm.count += 1;
},1000);


const app = Vue.createApp({
  template: "<counter />"
});

// creat a component that increments the counter
app.component("counter", {
  template : "The counter is: {{ count }}",
  data() {
    return { count : 0 }
  },
  // method of a component's life cycle it is called when the component is created 
  created() {
    setInterval( () => this.count++,2000);
  } 
})

const vm = app.mount("#app");

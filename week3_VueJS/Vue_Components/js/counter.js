const Counter = {
  data() {
    return { counter : 0 };
  },
  template : "The counter is: {{ counter }}",
  created() {
    setInterval( ()=> { this.counter++ },1000);
  }
}

export default Counter;
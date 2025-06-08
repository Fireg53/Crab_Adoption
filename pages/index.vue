<template>
  <div class="page">
    <h1>This is the homepage!</h1>
    <section class="quiz">
      <div class="qestions">
        <h2>Take our crab age quiz!!</h2>
        <label for="ageValue">Enter your age</label><br /><br />
        <input type="text" v-model="inputAge" />
        <!--comment   this is an event listener, vue is just weird  -->
        <button @click="crabAge()">enter</button>
      </div>
      <div class="answers">
        <h2 v-if="outputAge !== 0">Your Crab age is: {{ outputAge }}</h2>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return { inputAge: 0, outputAge: 0 };
  },
  methods: {
    crabAge() {
      const multiplier = 0.05;
      let newAge = multiplier * this.inputAge;
      this.outputAge = newAge;
    },
  },
};
</script>

<style scoped>
.page {
  padding: 20px;
}

.quiz {
  background: #84dde5;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  gap: 25vw;
  align-items: center;
  color: rgb(255, 255, 255);
  text-shadow: 2px 2px 3px rgb(150, 138, 255);
  text-decoration: none;
}
</style>

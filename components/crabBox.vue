<script setup>
defineProps(["image", "name", "height", "length", "loves"]);
</script>

<template>
  <div id="crabBox">
    <h4>{{ name }}</h4>
    <div id="imageBox">
      <img :src="image" class="pic" />
    </div>
    <div id="textBox">
      <p><b>Height:</b> {{ height }} in.</p>
      <p><b>Length:</b> {{ length }} in.</p>
      <p><b>Loves:</b> {{ loves }}</p>
    </div>
  </div>
</template>

<style scoped>
.pic {
  width: 25vw;
  height: 20vw;
  object-fit: cover;
}
h4 {
  text-align: center;
  font-weight: bold;
  color: white;
  font-size: 20px;
  text-decoration: none;
}
#crabBox {
  background-color: rgb(255, 138, 138);
  box-shadow: 0.5vw 0.5vw 4px rgb(147, 65, 45);
  border-radius: 20px;
}
#imageBox {
  border: solid;
  border-width: 1.5vw;
  border-image: repeating-linear-gradient(
      30deg,
      #ff5b3e,
      rgb(185, 177, 255),
      #ff5b3e 20px
    )
    60;
}
#textBox {
  max-width: 25vw;
  margin: 2vw;
  color: white;
}
</style>

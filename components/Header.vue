<template>
  <header>
    <router-link class="site-title" to="/">Hermit Crab Adoption</router-link>
    <router-link to="/" class="tab"> Home </router-link>
    <router-link to="/crabs" class="tab"> crabs </router-link>
    <router-link to="/aboutUs" class="tab"> about us </router-link>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0px;
  z-index: 20;
  background-color: #84dde5;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vw;
  width: calc(100vw - 20px);
  height: 40px;
  padding: 10px;
}

.site-title {
  font-weight: bold;
  margin-right: auto;
  color: rgb(255, 255, 255);
  text-shadow: 2px 2px 3px rgb(150, 138, 255);
  font-size: 20px;
  text-decoration: none;
}

.tab {
  color: white;
  background-color: rgb(150, 138, 255);
  padding: 10px;
  border: solid;
  border-radius: 5px;
  border-color: rgb(93, 77, 241);
  border-width: 3px;
  text-decoration: none;
}

.tab:hover {
  color: white;
  background-color: rgb(123, 108, 255);
}

.tab.router-link-active {
  color: white;
  background-color: rgb(93, 77, 241);
}
</style>

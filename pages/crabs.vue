<template>
  <div class="page">
    <img
      class="beach"
      src="https://media.istockphoto.com/photos/tropical-beach-palm-trees-sea-wave-and-white-sand-picture-id1300296030?b=1&k=20&m=1300296030&s=170667a&w=0&h=w1s7kmN2TH7O326d263Cs-E44teA1hy6u29UIVf_z1w="
    />
    <h1 class="title">Crab Adoption List</h1>
    <h1 class="subtitle">(See Bellow)</h1>
    <div class="crabContainer">
      <crabBox
        image="https://imgs.search.brave.com/xYbFvlPdePon779LmU4UxCFNBXw301-8b6Tu_SGdqcA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/ODEzMTU3Ny9waG90/by9leWUtdG8tZXll/LXdpdGgtYS1jcmFi/LW9uLXRoZS1iZWFj/aC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9LXZvbkc1U3RV/OGl6VVpqdVNPNE9j/YWYwWE1WRk5fcUlm/bWdsc1BleUx0ST0"
        name="Gregory"
        height="2"
        length="4"
        loves="long walks on the beach"
      />
      <crabBox
        image="https://www.gannett-cdn.com/authoring/2016/08/02/NPOH/ghows-SO-3530caa6-ad6b-4a83-e053-0100007f7d97-94d4ba32.jpeg?width=660&height=504&fit=crop&format=pjpg&auto=webp"
        name="Sanchez"
        height="3"
        length="5"
        loves="instilling fear in her enemies"
      />
      <crabBox
        image="https://www.peta.org/wp-content/uploads/2011/05/hermit-crab-beach.jpg"
        name="Varian"
        height="4"
        length="4"
        loves="Sammy"
      />
      <crabBox
        image="https://www.futurity.org/wp/wp-content/uploads/2020/01/hermit-crabs-wealth-inequality_1600.jpg"
        name="Monsieur Crab Legs"
        height="5"
        length="6"
        loves="to be alone"
      />
      <crabBox
        image="http://ourmarinespecies.com/wp-content/uploads/2018/08/coconut_crabs-1.jpg"
        name="Tamatoa"
        height="22"
        length="38"
        loves="shiny trinkets"
      />
      <crabBox
        image="https://live.staticflickr.com/837/29271414958_e50a4b7466_b.jpg"
        name="Timmithy"
        height="4"
        length="6"
        loves="other shellfish, single and ready to mingle"
      />
      <crabBox
        image="https://c.tenor.com/tIkZOxK_adAAAAAC/crab-rave.gif"
        name="Crab Dance Crab"
        height="4"
        length="6"
        loves="crab dancing"
      />
      <crabBox
        image="http://www.australiangeographic.com.au/wp-content/uploads/2018/06/pic3.jpeg"
        name="shamoneee"
        height="48"
        length="90"
        loves="Micheal Jackson"
      />
      <crabBox
        image="https://inaturalist-open-data.s3.amazonaws.com/photos/5900752/large.jpeg"
        name="Hebert"
        height="6"
        length="5"
        loves="worms"
      />
      <crabBox
        image="https://insider.si.edu/wp-content/uploads/2017/01/caughtredhan-630x478.jpg"
        name="Sammy"
        height="0"
        length="15"
        loves="Varian"
      />
    </div>
  </div>
</template>

<script>
import crabBox from "/components/crabBox.vue";
export default {
  components: {
    crabBox,
  },
};
</script>

<style scoped>
.page {
  padding-top: 0px;
  background: #e6d3c2;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
}

.crabContainer {
  width: 90vw;
  display: flex;
  flex-direction: grid;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.title {
  position: absolute;
  top: 40vh;
  font-size: 5vw;
  color: rgb(255, 255, 255);
  text-shadow: 5px 5px 5px rgb(255, 138, 138);
  text-decoration: none;
}
.subtitle {
  position: absolute;
  top: 55vh;
  font-size: 3vw;
  color: rgb(255, 255, 255);
  text-shadow: 5px 5px 5px rgb(255, 138, 138);
  text-decoration: none;
}

img {
  width: 100%;
}
</style>

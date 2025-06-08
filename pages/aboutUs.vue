<template>
  <div class="page">
    <h1 class="title">C.R.A.B.</h1>
    <div class="about">
      <section class="crabDesc">
        <p>
          The Crab Rehabilitation and Adoption Bureau is dedicated to rescuing
          crabs and giving them new homes. We pride ourselves on the variety of
          our crabs, including:
        </p>
        <ul>
          <li>Hermit crabs</li>
          <li>Coconut crabs</li>
          <li>Pink Ghost crabs</li>
          <li>Fairy crabs</li>
          <li>Crab Dance crabs</li>
        </ul>
      </section>
      <section class="founder">
        <h1>Founder</h1>
        <div class="founderBox">
          <h1>Iyan Syeed-Miller</h1>
          <img
            class="image"
            src="https://imgs.search.brave.com/nMFeQTKW9TWErxdE-58inKQn1IGWw239rkDB9hFsaBw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEy/NzM2NTYxNS9waG90/by9wcm9jYW1iYXJ1/cy1hbGxlbmktYmx1/ZS1jcmF5ZmlzaC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/X0hISkU3cEFOdWtf/bkItLTZ1MjhNbXY1/NlhFQVBPMU5naEky/N0trNndVcz0"
          />
          <p>crab lover and entrepreneur</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.page {
  padding: 10px;
}

.about {
  display: flex;
  flex-direction: row;
}

.crabDesc {
  width: 50vw;
  padding-right: 20vw;
}

.founder {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(150, 138, 255);
}

.founderBox {
  background: #84dde5;
  padding: 10px;
  border-radius: 10px;
  color: white;
  text-shadow: 2px 2px 3px rgb(150, 138, 255);
}

.image {
  width: 20vw;
}

.title {
  color: #fc9e9b;
  text-shadow: 2px 2px 2px maroon;
}
</style>

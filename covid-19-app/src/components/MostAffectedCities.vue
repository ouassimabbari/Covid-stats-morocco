<script type="text/javascript">
export default {
  props: {
    cities: { required: true }
  }
};
</script>

<template>
  <section class="most-affected-cities">
    <div class="city-card" v-for="city in cities" :key="city.total_cases">
      <div>
        <h3>{{ city._id.city[0] }}</h3>
        <p>Total cases: {{ city.total_cases }}</p>
      </div>
      <ul>
        <li>Recoveries: {{ city.total_recovered }}</li>
        <li>Deaths: {{ city.total_deaths }}</li>
        <li>New cases: {{ city.new_cases }}</li>
      </ul>
    </div>
  </section>
</template>

<style type="text/css">
.most-affected-cities {
  padding-top: var(--default-top);
  padding-bottom: var(--default-top);
  display: grid;
  column-gap: 0.9em;
  row-gap: 0.9em;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
}

.city-card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  background-color: var(--card-color);
  width: 100%;
  height: 10vh;
}

.city-card div {
  text-align: center;
}

.city-card ul {
  display: none;
  list-style-type: none;
}

.city-card:hover ul {
  display: block;
}

@media screen and (max-width: 900px) {
  .most-affected-cities {
    grid-template-columns: 1fr 1fr;
  }
}
</style>

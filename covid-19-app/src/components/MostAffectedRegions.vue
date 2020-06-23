<script type="text/javascript">
export default {
  props: {
    regions: { required: true }
  }
};
</script>

<template>
  <section class="most-affected-regions">
    <div
      class="region-card"
      v-for="region in regions"
      :key="region.total_cases"
    >
      <div>
        <h3>{{ region._id[0] }}</h3>
        <p>Total cases: {{ region.total_cases }}</p>
      </div>
      <ul>
        <li>Recoveries: {{ region.total_recovered }}</li>
        <li>Deaths: {{ region.total_deaths }}</li>
        <li>New cases: {{ region.new_cases }}</li>
      </ul>
    </div>
  </section>
</template>

<style type="text/css">
.most-affected-regions {
  padding-top: var(--default-top);
  padding-bottom: var(--default-top);
  display: grid;
  column-gap: 0.9em;
  row-gap: 0.9em;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
}

.region-card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  background-color: var(--card-color);
  width: 100%;
  height: 10vh;
}

.region-card div {
  text-align: center;
}

.region-card ul {
  display: none;
  list-style-type: none;
}

.region-card:hover ul {
  display: block;
}

@media screen and (max-width: 900px) {
  .most-affected-regions {
    grid-template-columns: 1fr 1fr;
  }
}
</style>

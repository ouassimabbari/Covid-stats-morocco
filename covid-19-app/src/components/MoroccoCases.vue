<script>
export default {
  props: {
    cases: {
      required: true
    }
  }
};
</script>


<template>
  <section class="morocco-cases">
    <div class="total-cases">
      <h1>{{ cases.total_cases }}</h1>
      <p>Total cases</p>
    </div>
    <div class="case-infos">
      <div class="case-card">
        <h2>{{ cases.total_recovered }}</h2>
        <p>Recoveries</p>
      </div>
      <div class="case-card">
        <h2>{{ cases.total_deaths }}</h2>
        <p>Deaths</p>
      </div>
      <div class="case-card">
        <h2>{{ cases.new_cases }}</h2>
        <p>new cases</p>
      </div>
    </div>
  </section>
</template>

<style type="text/css">
.morocco-cases {
  padding-top: var(--default-top);
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  column-gap: 0.9em;
}

.total-cases {
  background-color: var(--card-color);
  min-height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0.9em;
  color: white;
}

.total-cases h1 {
  font-size: 5em;
}

.total-cases p {
  font-size: 2em;
}

.case-infos {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.case-infos .case-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: var(--card-color);
  min-height: 15vh;
  padding: 0.9em;
  color: white;
}

.case-card h2 {
  font-size: 2.5em;
}
</style>
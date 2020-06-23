<script type="text/javascript">
import Navbar from "@/components/Navbar";
import MoroccoCases from "@/components/MoroccoCases";
import BreakingNews from "@/components/BreakingNews";
import MostAffectedRegions from "@/components/MostAffectedRegions";
import MostAffectedCities from "@/components/MostAffectedCities";
import Charts from "@/components/Charts";
import ChartsRegion from "@/components/ChartsRegion";
import ChartsCity from "@/components/ChartsCity";
export default {
  created() {
    this.$store.dispatch("moroccoCases/getMoroccoCases");
    this.$store.dispatch("news/getLastNews");
    this.$store.dispatch("regions/getMostAffectedRegions");
    this.$store.dispatch("cities/getMostAffectedCities");
  },
  computed: {
    moroccoCases() {
      return this.$store.getters["moroccoCases/cases"];
    },
    lastNews() {
      return this.$store.getters["news/lastNews"];
    },
    mostAffectedRegions() {
      return this.$store.getters["regions/mostAffectedRegions"];
    },
    mostAffectedCities() {
      return this.$store.getters["cities/mostAffectedCities"];
    }
  },
  components: {
    Navbar,
    MoroccoCases,
    BreakingNews,
    MostAffectedRegions,
    Charts,
    ChartsRegion,
    MostAffectedCities,
    ChartsCity
  }
};
</script>

<template>
  <div>
    <Navbar />
    <main>
      <MoroccoCases :cases="moroccoCases" />
      <BreakingNews :lastNews="lastNews" />
      <Charts />
      <MostAffectedRegions :regions="mostAffectedRegions" />
      <ChartsRegion />
      <MostAffectedCities :cities="mostAffectedCities" />
      <ChartsCity />
    </main>
    <footer>
      <h1>
        Covid-19
        <b>Morocco</b>
      </h1>
    </footer>
  </div>
</template>

<style type="text/css">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,600&display=swap");

:root {
  --primary-color: #373a3c;
  --card-color: #2c3e50;
  --default-top: 2em;
  font-family: "Open Sans", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  width: 80%;
  margin: auto;
}

footer {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 20vh;
  background-color: var(--primary-color);
}
</style>

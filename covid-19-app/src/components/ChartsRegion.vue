<script>
import VueApexCharts from "vue-apexcharts";
import axios from "axios";
export default {
  created() {
    axios({
      method: "GET",
      url: "http://localhost:3000/api/statsByRegion"
    }).then(response => {
      response.data.forEach(region => {
        this.series.push(region.total_cases);
        this.chartOptions.labels.push(region._id[0]);
      });
      this.loaded = true;
    });
  },
  components: {
    VueApexCharts
  },
  data() {
    return {
      loaded: false,
      series: [],
      chartOptions: {
        chart: {
          width: 380,
          type: "pie"
        },
        labels: [],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      }
    };
  }
};
</script>

<template>
  <section class="chartsRegion">
    <VueApexCharts
      width="600"
      type="pie"
      :options="chartOptions"
      :series="series"
      v-if="loaded"
    />
  </section>
</template>

<style>
.chartsRegion {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

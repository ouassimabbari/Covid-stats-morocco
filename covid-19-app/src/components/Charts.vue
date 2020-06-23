<script>
import VueApexCharts from "vue-apexcharts";
import axios from "axios";
export default {
  created() {
    axios({
      method: "GET",
      url: "http://localhost:3000/api/statsByCountryHistory"
    }).then(response => {
      response.data.forEach(stat => {
        this.options.xaxis.categories.push(
          stat._id.substring(0, stat._id.length - 14)
        );
        this.series[0].data.push(stat.total_cases);
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
      options: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: []
        }
      },
      series: [
        {
          name: "series-1",
          data: []
        }
      ]
    };
  }
};
</script>

<template>
  <section class="charts">
    <VueApexCharts
      height="600"
      width="1500"
      :options="options"
      :series="series"
      :type="line"
      v-if="loaded"
    />
  </section>
</template>

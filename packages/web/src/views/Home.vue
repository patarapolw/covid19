<template>
  <section>
    <div id="chart">
      <canvas />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Chart } from "chart.js";

@Component<Home>({
  mounted() {
    this.chart = new Chart(
      this.$el.querySelector("#chart")!.querySelector("canvas")!,
      {
        type: "bar",
        data: {
          datasets: [
            {
              label: "Line Dataset",
              data: [50, 30, 20, 40],
              type: "line",
              fill: false,
            },
            {
              label: "Bar Dataset",
              data: [10, 20, 30, 40],
              backgroundColor: require('chartjs-plugin-colorschemes/src/colorschemes/colorschemes.brewer').SetThree12,
            },
          ],
          labels: ["January", "February", "March", "April"],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      }
    );
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  },
})
export default class Home extends Vue {
  chart: Chart | null = null;
}
</script>

<style scoped>
#chart {
  width: 60vw;
}
</style>

<template>
    <div class="appGraph">
        <div id="app">
      <div class="chart-wrap">
        <div id="chart">
          <apexchart type=donut width=380 :options="chartOptions" :series="series" />
        </div>
      </div>

      <!-- <div class="actions">
        <button @click="randomize">RANDOMIZE</button>
        <button @click="appendData">ADD</button>
        <button @click="removeData">REMOVE</button>
        <button @click="reset">RESET</button>
      </div> -->
    </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'
Vue.component('apexchart', VueApexCharts)

export default {
     components: {
        'apexchart': VueApexCharts,
      },
      data(){
          return{
              series: [44, 55, 13, 33],
        chartOptions: {
          dataLabels: {
            enabled: false
          },
          options:{
              chart:{
                  width:1000,
                  height:700
              }
          },

          responsive: [{
            breakpoint: 600,
            options: {
              chart: {
                width: 350,
                height:300
              },
              legend: {
                show: false
              }
            }
          }],
          legend: {
              position: 'right',
              offsetY: 0,
              height: 230,
          }
        }
          }
      },
      methods: {
        appendData: function () {
          var arr = this.series.slice()
          arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
          this.series = arr
        },

        removeData: function () {
          if(this.series.length === 1) return
          var arr = this.series.slice()
          arr.pop()
          this.series = arr
        },

        randomize: function () {
          this.series = this.series.map(() => {
            return Math.floor(Math.random() * (100 - 1 + 1)) + 1
          })
        },

        reset: function () {
          this.series = [44, 55, 13, 33]
        }
      }
}
</script>
<style scoped>
@media screen and (max-width:600px){
    #chart{
        height:40vh;
    }
}
</style>


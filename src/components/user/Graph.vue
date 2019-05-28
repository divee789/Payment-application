<template>
<div id="chart">
      <apex-chart id="chart" type=line height=400  width=100% :options="chartOptions" :series="series" />
      
    </div>
</template>

<script>
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'

Vue.component('apex-chart', VueApexCharts)
export default {
    components:{
          'apex-chart':VueApexCharts,
    },
      data : function () {
          return {
        series: [{
            name: "Payments",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        chartOptions: {
          chart: {
                height: 350,
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'Total Volume',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#fff', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 1
                },
            },
            xaxis: {
                categories: ['18 April', '19 April', '20 April', '21 April', '22 April', '23 April', '24 April', '25 April', '26 April'],
            }
        },
        
      }
    }
}

</script>

<style scoped>
  #chart{
      padding-top:10px;
  }
</style>
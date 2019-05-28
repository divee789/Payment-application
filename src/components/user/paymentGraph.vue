<template>
    
<div class="payment-graph-app">

 <apex-chart type="bar" height=350 width=100% :options="options"  :series="series" id="graph"></apex-chart>

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
    data () {
        return{
        series: [{
                data: [21, 22, 10, 28, 16, 21, 13, 30]
           }],
        options : {
            chart: {
                type: 'bar',
                events: {
                    click: function(chart, w, e) {
                        console.log(chart, w, e )
                    }
                },
            },
            plotOptions: {
                bar: {
                    columnWidth: '5%',
                    distributed: true
                }
            },
            dataLabels: {
                position:'top',
                enabled: true,
            },
            grid:{
                yaxis:{
                    lines:{
                        show:false
                        }
                }
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug','Sep','Oct','Nov','Dec'],
                labels: {
                    style: {
                        fontSize: '14px'
                    }
                }
            }
        }
        }
    }
}
</script>

<style scoped>
@media screen and (max-width:600px){
    #graph{
        height:300px;
        width:100%;
    }
}

</style>



import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Line,
    data: () => ({
        results:[],
        chartdata: {
          //labels:['2020-3-05',4,5,6],
          labels:[],
          datasets: [
            {
              label: 'MRT',
               data:[],
              //backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"lightgreen",
              backgroundColor:'lightgreen',
              fill:false
            },
            {
              label: 'Bus',
               data:[],
              //backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"#f0b87a",
              backgroundColor:'#f0b87a',
              fill:false
            },
            {
              label: 'Taxi',
               data:[],
              //backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"#a83c32",
              backgroundColor:'#a83c32',
              fill:false
            },         
            {
              label: 'LRT',
               data:[],
              //backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"#e3e042",
              backgroundColor:'#e3e042',
              fill:false
            },
          ]
          
        },
        options: {
           
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            }
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=552b8662-3cbc-48c0-9fbb-abdc07fb377a').then(response=>{
        this.results=response.data.result.records
        //console.log(response.data)
        //console.log(this.results)
        for(let key in this.results){
          if (this.results[key].type_of_public_transport == 'MRT') {
            this.chartdata.datasets[0].data.push(this.results[key].average_ridership)
            if(!this.chartdata.labels.includes(this.results[key].year)) {
              this.chartdata.labels.push(this.results[key].year+'')
            }
          }
          else if (this.results[key].type_of_public_transport == 'Bus') {
            this.chartdata.datasets[1].data.push(this.results[key].average_ridership)
            if (!this.chartdata.labels.includes(this.results[key].year)) {
              this.chartdata.labels.push(this.results[key].year+'')
            }
          }
          else if (this.results[key].type_of_public_transport == 'Taxi') {
            this.chartdata.datasets[2].data.push(this.results[key].average_ridership)
            if (!this.chartdata.labels.includes(this.results[key].year)) {
              this.chartdata.labels.push(this.results[key].year+'')
            }
          }
          else {
            this.chartdata.datasets[3].data.push(this.results[key].average_ridership)
            if (!this.chartdata.labels.includes(this.results[key].year)) {
              this.chartdata.labels.push(this.results[key].year+'')
            }
          }
            
            
        }
        this.renderChart(this.chartdata,this.options)
            
    })
    
    }
    
    },
     mounted(){
        //console.log('Do I come here')
        this.fetchData()
        
     }

    
    
    
}
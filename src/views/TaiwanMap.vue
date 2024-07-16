<script>
    export default{
      data(){
        return{
            
        }
      },
      methods:{
        taiwanChart(){
            
            let labels = ['2013', '2014', '2015', '2016','2017']
            let itemData1 = [1000,1200,1500,2000,2100]
            let itemData2 = [2000,2500,1500,1300,3000]
            const data = {
                labels: labels,
                datasets: [{
                    label: 'Dataset 1',
                    data: itemData1,
                    borderColor: 'rgb(255,0,0)',
                    backgroundColor:'rgb(66,221,245)'
                },
                {   
                    label: 'Dataset 2',
                    data: itemData2,
                    borderColor: 'rgb(0,255,0)',
                    backgroundColor:'rgb(66,221,245)'
                }
            ]
            };

            const config={
                type:'line',
                data: data    
            };

            const chart = new Chart(
                document.getElementById('myChart'),
                config
            );
        },
    }
}

    // function chart(){
    //     let labels = ['2013', '2014', '2015', '2016','2017']
    //     let itemData = [1000,1200,1500,2000,2100]
    //     const data = {
    //         labels: labels,
    //         datasets: [{
    //             data: itemData,
    //             backgroundColor:'rgb(66,221,245)'
    //         }]
    //     };

    //     const config={
    //         type:'bar',
    //         data: data    
    //     };

    //     const chart = new Chart(
    //         document.getElementById('myChart'),
    //         config
    //     );
    // }

</script>



<template>

    <h1>哈囉阿 我是taiwanMap</h1>
    <button type = "button" v-on:click=this.taiwanChart>button</button>
    <div style="width:900px; height:400px;">
        <canvas id = "myChart"></canvas>
    </div>
</template>
  

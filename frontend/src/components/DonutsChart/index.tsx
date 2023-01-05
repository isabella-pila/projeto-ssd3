/*import axios from 'axios';
import { useEffect, useState } from 'react';

import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';*/
import Chart from 'react-apexcharts';
/*type ChartData = {
    labels: string[];
    series: number[];
}*/
const DonutsChart = () => {
    //forma certa
    /* const [chartData, setChartData] = useState<ChartData>({ labels: [], series:[] });
 
     useEffect(() => { 
         axios.get(`${BASE_URL}/sales/amount-by-seller`)
     .then((response)=>{
         const data = response.data as SaleSum[];
         const myLabels = data.map(x => x.sellerName);
         const mySeries = data.map(x => x.sum);
 
         setChartData( { labels: myLabels, series: mySeries});
     });
     }, [] );*/

    //forma errada
    //let chartData: ChartData = { labels: [], series: [] };


    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: mockData.labels }}
            series={mockData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutsChart;
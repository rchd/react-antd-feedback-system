import React from 'react';
import {Row,Col} from 'antd';
import {Line,Bar,HorizontalBar} from 'react-chartjs-2';
//import {Skeleton} from 'antd';
//import ReactEcharts from "echarts-for-react";
import SiderBar from '../sidebar/sidebar'


const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};




class Charts extends React.Component{
    render(){
        return(
            <SiderBar  defaultSelectedKeys={['2']}
                        title=""
                        subtitle=""
            >
                {
                    //<Line data={data} />
                    //<HorizontalBar data={data} />
                    //<Line data={data} />
                    //<HorizontalBar data={data} />
                }
                <Row type="flex" >
                    <Col  md={24} lg={12}>
                        <Line data={data} />
                    </Col>
                    <Col  md={24} lg={12}>
                        <HorizontalBar data={data} />
                    </Col>
                    <Col md={24} lg={12}>
                        <Line data={data} />
                    </Col>
                    <Col md={24} lg={12}>
                        <HorizontalBar data={data} />
                    </Col>
                </Row>
            </SiderBar>
        );
    }

}
export default Charts;


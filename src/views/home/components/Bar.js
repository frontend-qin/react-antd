import React, { PureComponent } from 'react'
import echarts from 'echarts'

class Bar extends PureComponent {
  componentDidMount() {
    const myChart = echarts.init(document.getElementById('main'))
    // 绘制图表
    myChart.setOption({
      angleAxis: {},
      radiusAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四'],
        z: 10
      },
      polar: {},
      series: [
        {
          type: 'bar',
          data: [1, 2, 3, 4],
          coordinateSystem: 'polar',
          name: 'A',
          stack: 'a'
        },
        {
          type: 'bar',
          data: [2, 4, 6, 8],
          coordinateSystem: 'polar',
          name: 'B',
          stack: 'a'
        },
        {
          type: 'bar',
          data: [1, 2, 3, 4],
          coordinateSystem: 'polar',
          name: 'C',
          stack: 'a'
        }
      ],
      legend: {
        show: true,
        data: ['A', 'B', 'C']
      }
    })
  }
  render() {
    return <div id="main" style={{ width: '100%', height: 400 }} />
  }
}

export default Bar

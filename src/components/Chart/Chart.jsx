import { useEffect, useMemo, useState } from 'react'
import * as echarts from 'echarts'

export const Chart = () => {
  const generateData = useMemo(() => {
    let data = []
    for (let i = 0; i < 100; i++) {
      const rnd = Math.random() * 100000
      data.push(rnd)
    }
    return data;
  },[])
  const text = 'React lesson'
  useEffect(() => {
    let option = {
      title: {
        text: text,
        show: true,
        textStyle: {
          
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        valueFormatter: (value) => 'bln ' + value,
      },
      legend: {
        
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: '2011',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230],
        },
        {
          name: '20asdfasdfasdf12',
          type: 'line',
          data: generateData,
          color: 'lightgreen',
        },
      ],
    }
    const chartDom = document.getElementById('chartsId')
    const myChart = echarts.init(chartDom)
    option && myChart.setOption(option)
  }, [generateData])

  return (
    <>
      <div style={{ width: '40wh', height: '700px' }} id="chartsId"></div>
    </>
  )
}

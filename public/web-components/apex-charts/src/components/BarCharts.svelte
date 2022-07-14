<svelte:options tag="bar-chart" />

<script>
  export let title = 'sample';
  export let colors = undefined;
  export let series = [
    {
      name: 'PRODUCT A',
      data: [44, 55, 41, 67, 22, 43, 21, 49],
    },
    {
      name: 'PRODUCT B',
      data: [13, 23, 20, 8, 13, 27, 33, 12],
    },
    {
      name: 'PRODUCT C',
      data: [11, 17, 15, 15, 21, 14, 15, 13],
    },
  ];
  export let categories = [
    '2011 Q1',
    '2011 Q2',
    '2011 Q3',
    '2011 Q4',
    '2012 Q1',
    '2012 Q2',
    '2012 Q3',
    '2012 Q4',
  ];
  export let stack100 = true;

  let options;
  $: options = {
    title: {
      text: title,
    },
    chart: {
      zoom: {
        enabled: true,
      },
      animations: {
        enabled: false,
      },
      height: 350,
      type: 'bar',
      stacked: true,
      stackType: stack100 ? '100%' : 'normal',
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          selectionZoom: false,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
        },
      },
    },
    dataLabels: {
      formatter: function (val) {
        return val.toFixed(1) + '%';
      },
      enabled: true,
    },
    colors: colors,
    // responsive: [
    //   {
    //     breakpoint: 480,
    //     options: {
    //       legend: {
    //         position: 'bottom',
    //         offsetX: -10,
    //         offsetY: 0,
    //       },
    //     },
    //   },
    // ],
    series: series,
    xaxis: {
      tickPlacement: 'on',
      categories: categories,
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: 'bottom',
    },
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
    },
  };

  import { createEventDispatcher } from 'svelte';
  import { get_current_component } from 'svelte/internal';

  const component = get_current_component();
  const originalDispatch = createEventDispatcher();

  const dispatch = (name, detail) => {
    originalDispatch(name, detail);
    component?.dispatchEvent(new CustomEvent(name, { detail }));
  };

  $: options && dispatch('optionschanged', { options });

  import ApexCharts from 'apexcharts';
  window.ApexCharts = ApexCharts;

  const chart = (node, options) => {
    let myChart = new ApexCharts(node, options);
    myChart.render();

    return {
      update(options) {
        myChart.updateOptions(options);
      },
    };
  };
</script>

<main>
  <div use:chart={options} />
</main>

<style>
</style>

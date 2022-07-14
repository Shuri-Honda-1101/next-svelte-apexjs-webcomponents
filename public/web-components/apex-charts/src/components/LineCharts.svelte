<svelte:options tag="line-chart" />

<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { get_current_component, onMount } from "svelte/internal";

  import type { Chart, Yaxis } from "../type";

  import ApexCharts from "apexcharts";
  window.ApexCharts = ApexCharts;

  export let title: string = "sample";
  export let categories: string[] | number[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
  ];
  export let series: { name: string; data: number[] }[] = [
    {
      name: "sample1",
      data: [28, 29, 33, 36, 32, 32, 33],
    },
    {
      name: "sample2",
      data: [12, 11, 14, 18, 17, 13, 13],
    },
  ];

  export let yaxis: { color: string; title: string }[] = [
    { color: "#FF1654", title: "sample1" },
    { color: "#247BA0", title: "sample2" },
  ];

  const makeYaxis = (yaxis: { color: string; title: string }[]): Yaxis[] => {
    let arr: Yaxis[] = [];
    for (let i = 0; i < yaxis.length; i++) {
      const result = {
        opposite: i % 2 === 1 ? true : false,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: yaxis[i].color,
        },
        labels: {
          style: {
            colors: yaxis[i].color,
          },
        },
        title: {
          text: yaxis[i].title,
          style: {
            color: yaxis[i].color,
          },
        },
      };
      arr.push(result);
    }
    return arr;
  };

  let options: Chart = {};
  $: options = {
    title: {
      text: title,
    },
    chart: {
      zoom: {
        enabled: true,
      },
      height: 350,
      type: "line",
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
        return val;
      },
      enabled: true,
      background: {
        enabled: true,
        foreColor: "#fff",
        padding: 4,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: "#fff",
        opacity: 0.9,
      },
    },
    series: series,
    xaxis: {
      categories: categories,
      tickPlacement: "on",
      tooltip: {
        enabled: false,
      },
    },
    stroke: {
      curve: "straight",
      width: [4, 4],
    },
    theme: {
      mode: "light",
      palette: "palette7",
    },
    yaxis: makeYaxis(yaxis),
    tooltip: {
      enabled: true,
      shared: true,
    },
    legend: {
      position: "bottom",
    },
    annotations: {
      xaxis: [
        {
          x: 1,
          strokeDashArray: 0,
          borderColor: "#775DD0",
          label: {
            borderColor: "#775DD0",
            style: {
              color: "#fff",
              background: "#775DD0",
              cssClass: "tt1",
            },
            text: "Anno Test",
          },
        },
      ],
      yaxis: [
        {
          y: 3,
          strokeDashArray: 0,
          borderColor: "#775DD0",
          label: {
            borderColor: "#775DD0",
            style: {
              color: "#fff",
              background: "#775DD0",
              cssClass: "tt1",
            },
            text: "Anno Test",
          },
        },
      ],
      points: [
        {
          x: 3,
          y: 1,
          marker: {
            size: 3,
            fillColor: "#fff",
            strokeColor: "#333",
            strokeWidth: 3,
            shape: "circle",
            radius: 2,
            OffsetX: 0,
            OffsetY: 0,
            cssClass: "",
          },
          label: {
            borderColor: "#775DD0",
            style: {
              color: "#fff",
              background: "#775DD0",
              cssClass: "tt1",
            },
            text: "Anno Test",
          },
        },
      ],
    },
  };
  const component = get_current_component();
  const originalDispatch = createEventDispatcher();

  const dispatch = (name, detail) => {
    originalDispatch(name, detail);
    component?.dispatchEvent(new CustomEvent(name, { detail }));
  };

  $: options && dispatch("optionschanged", { options });

  const chart = (node, options) => {
    let myChart = new ApexCharts(node, options);
    myChart.render();

    return {
      update(options) {
        myChart.updateOptions(options);
      },
      destroy() {
        myChart.destroy();
      },
    };
  };
</script>

<main>
  <div use:chart={options} />
</main>

<style>
</style>

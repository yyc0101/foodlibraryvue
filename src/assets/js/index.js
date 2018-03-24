(function() {
  var dom1 = document.getElementById("container1");
  var dom2 = document.getElementById("container2");
  var myChart1 = echarts.init(dom1);
  var myChart2 = echarts.init(dom2);
  var app = {};
  option1 = null;
  option2 = null;
  //................图形1解析
  option1 = {
    tooltip: { trigger: "item", formatter: "{a} <br/>{b} : {c} ({d}%)" },
    series: [
      {
        name: "今日营收",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
          { value: 300, name: "预存收入 0.00" },
          { value: 280, name: "堂食收入 0.00" },
          { value: 280, name: "外卖收入 0.00" }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };
  if (option1 && typeof option1 === "object") {
    myChart1.setOption(option1, true);
  }
  //...........图形2解析...........

  option2 = {
    tooltip: { trigger: "axis", axisPointer: { type: "cross" } },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "03-20",
        "03-21",
        "03-22",
        "03-23",
        "03-24",
        "03-25",
        "03-26",
        "03-27",
        "03-28",
        "03-29"
      ]
    },
    yAxis: { type: "value", axisPointer: { snap: true } },
    visualMap: {
      show: false,
      dimension: 0,
      pieces: [
        { lte: 6, color: "green" },
        { gt: 6, lte: 8, color: "red" },
        { gt: 8, lte: 14, color: "green" },
        { gt: 14, lte: 17, color: "red" },
        { gt: 17, color: "green" }
      ]
    },
    series: [
      {
        name: "日营收",
        type: "line",
        smooth: true,
        data: [0.2, 0.5, 0.4, 0.8, 1.2, 1.1, 0.6, 0.7, 0.8, 0.4],
        markArea: {
          data: [
            [{ name: "早高峰", xAxis: "07:30" }, { xAxis: "10:00" }],
            [{ name: "晚高峰", xAxis: "17:30" }, { xAxis: "21:15" }]
          ]
        }
      }
    ]
  };
  if (option2 && typeof option2 === "object") {
    myChart2.setOption(option2, true);
  }

  //头部点击显示导航栏
  // #f1f1f2
  $(".iteml .aas").bind("click", function() {
    $(this)
      .addClass("active")
      .parent()
      .eq(0)
      .siblings()
      .removeClass("active");
  });
})();

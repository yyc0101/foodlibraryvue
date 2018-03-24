(function() {
  //.............菜单详情事件..............
  $(".detail-content #detailss").toggle(
    function() {
      $(this)
        .html("不显示隐藏")
        .css({
          background: "#ebebeb",
          color: "#8a6d3b",
          borderRadius: " 2px",
          fontSize: " 10px"
        });
      $("#spans1")
        .html("是")
        .css({
          display: "blcok",
          width: "20px",
          height: "18px",
          color: " #fff",
          fontSize: " 10px",
          textAlign: "center",
          background: "#5cb85c",
          padding: "2px 6px 2px 6px",
          borderRadius: " 2px",
          fontWeight: " 600"
        });
    },
    function() {
      $(this)
        .html("显示隐藏")
        .css({
          background: "#fff",
          color: "#3c763d",
          borderRadius: " 2px",
          fontSize: " 10px"
        });
      $("#spans1")
        .html("否")
        .css({
          display: "blcok",
          width: "20px",
          height: "18px",
          color: " #fff",
          fontSize: " 10px",
          textAlign: "center",
          background: "#f0ad4e",
          padding: "2px 6px 2px 6px",
          borderRadius: " 2px",
          fontWeight: " 600"
        });
    }
  );
  $("#spanslis1").on("click", function() {
    $("#spans2")
      .html("[1] 发布")
      .css({
        color: "#fff",
        background: "#5cb85c",
        padding: "2px 6px 2px 6px",
        borderRadius: "2px",
        fontWeight: "600"
      });
  });
  $("#spanslis2").on("click", function() {
    $("#spans2")
      .html("[2] 关闭")
      .css({
        color: "#fff",
        background: "#f0ad4e",
        padding: "2px 6px 2px 6px",
        borderRadius: "2px",
        fontWeight: "600"
      });
  });
})();

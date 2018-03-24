<template>
  <div>
    <!-- 图标部分 -->
    <div class="headers">
        <div class="header">
            <div class="header-left">
                <h3>今日营收</h3>
                <div id="container1"></div>
            </div>
            <div class="header-right">
                <h3>一周营收</h3>
                <div id="container2"></div>
            </div>
        </div>
    </div>
    <!-- 中间部分 -->
    <div class="con-tents">
        <div class="contents">
            <ul class="contents1">
                <li>
                    <img src="../../../assets/imgs/in-1.png" />
                </li>
                <li>
                    <strong>2</strong>
                    <p>餐台总数</p>
                </li>
            </ul>
            <ul class="contents2">
                <li>
                    <img src="../../../assets/imgs/in-2.png" />
                </li>
                <li>
                    <strong>0</strong>
                    <p>开台次数</p>
                </li>
            </ul>
            <ul class="contents3">
                <li>
                    <img src="../../../assets/imgs/in-3.png" />
                </li>
                <li>
                    <strong>0</strong>
                    <p>到店人数</p>
                </li>
            </ul>
            <ul class="contents4">
                <li>
                    <img src="../../../assets/imgs/in-4.png" />
                </li>
                <li>
                    <strong>0</strong>
                    <p>外卖单数</p>
                </li>
            </ul>
        </div>
    </div>
    <!-- 订单部分 -->
    <div class="orders">
        <div class="order-order">
            <ul class="ul1">
                <li class="order1">新订单</li>
                <li>暂无[新订单]推送</li>
            </ul>
            <ul class="ul1 ull">
                <li class="order2">订单更新</li>
                <li>暂无[订单更新]推送</li>
            </ul>
        </div>
        <div class="order-order ">
            <ul class="ul2">
                <li class="order3">呼叫服务消息</li>
                <li>暂无[呼叫服务新消息]推送</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contentmain"
};
</script>

<template>
      <!-- 表格部分 -->
    <div class="detail-content">
        <div class="content">
            <div class="con-table">
                <table class="tb1" cellspacing="0" cellpadding="0">
                    <tr>
                        <td> 麻辣香锅</td>
                    </tr>
                </table>
                <table class="tb2" border="1" cellspacing="0" cellpadding="0">

                    <tr>
                        <td width="122px"> 菜品类型</td>
                        <td width="250px" style="color:#333">[0] 普通</td>
                        <td width="122px">菜品标识</td>
                        <td width="250px" style="color:#333"> [0] 单品</td>
                    </tr>
                    <tr>
                        <td> 菜品编号</td>
                        <td style="color:#333">444</td>
                        <td> 查找编码</td>
                        <td style="color:#333"> 1111</td>
                    </tr>
                    <tr>
                        <td> 菜品二维码</td>
                        <td style="color:#333"> DGEIWLB</td>
                        <td> 菜品成本</td>
                        <td style="color:#333"> 60.00</td>
                    </tr>
                    <tr>
                        <td> 菜品价格</td>
                        <td style="color:#333"> 50.00</td>
                        <td> 菜品原价</td>
                        <td style="color:#333"> 50.00</td>
                    </tr>
                    <tr>
                        <td> 显示详情</td>
                        <td>
                            <span class="span1" id="spans1">否</span>
                        </td>
                        <td> 推荐星级</td>
                        <td style="color:#333"> 0</td>
                    </tr>
                    <tr>
                        <td style="line-height:16px;padding-top:8px;padding-bottom:8px;"> 新品 热门 口味
                            <br/>参与优惠</td>
                        <td class="td1" style="color:#333">
                            <span class="span2">新品</span>
                            <span class="span2">热门</span>
                            <span class="span22">可编辑口味</span>
                            <span class="span2">参与优惠</span>
                        </td>
                        <td> 是否外卖</td>
                        <td style="color:#333">
                            <span class="span3">外卖</span> 仅在商户支持外卖时生效</td>
                    </tr>
                    <tr>
                        <td> 菜品状态</td>
                        <td>
                            <span class="span2" id="spans2">[1] 发布</span>
                        </td>
                        <td> 菜品排序</td>
                        <td style="color:#333"> 0</td>
                    </tr>
                    <tr>
                        <td> 创建时间</td>
                        <td style="color:#333"> 2018-03-14 21:17:22</td>
                        <td> 更新时间</td>
                        <td style="color:#333"> 2018-03-16 21:03:53</td>
                    </tr>
                    <tr>
                        <td> 菜品分类</td>
                        <td>
                            <span class="span4">水煮鱼</span>
                        </td>
                        <td> 菜品单位</td>
                        <td style="color:#333"> 份</td>
                    </tr>
                    <tr>
                        <td> 菜品备注</td>
                        <td> 很好</td>
                    </tr>
                </table>
                <table class="tb3" cellspacing="0" cellpadding="0">
                    <tr>
                        <td class="lasttd1">
                            <li>
                                <img src="../../assets/imgs/dt5.png" />
                                <span>修改菜品信息</span>
                            </li>
                            <li>
                                <span class="lispan11" id="spanslis1">发布</span>
                                <span class="lispan22" id="spanslis2">关闭</span>
                            </li>
                            <li id="detailss">
                                <span class="lispan1">显示详情</span>
                            </li>
                            <li>
                                <img src="../../assets/imgs/dt2.png" />
                                <span>图片维护</span>
                            </li>
                            <li>
                                <img src="../../assets/imgs/dt3.png" />
                                <span>标签维护</span>
                            </li>
                            <li>
                                <img src="../../assets/imgs/dt4.png" />
                                <span>搭配菜</span>
                            </li>
                            <li>
                                <img src="../../assets/imgs/dt2.png" />
                                <span>成本卡维护</span>
                            </li>
                        </td>
                    </tr>
                </table>
            </div>
            <!-- 右边部分内容 -->
            <div class="con-bottom">
                <div class="bottoms11">图片列表</div>
                <img src="../../assets/imgs/dt6.png" />
                <div class="bottoms11">共[1]张图</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "listbox"
};
</script>

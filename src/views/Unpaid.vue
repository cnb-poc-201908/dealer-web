<template>
  <div class="container">
    <Header>
      <Menus active-name="2"></Menus>
    </Header>
    <main>
      <div class="card-title">完全匹配</div>
      <div class="card perfect">
        <div class="card-item" :class="{expand: isExpand}">
          <div class="check">
            <Checkbox>&nbsp;</Checkbox>
          </div>
          <Card :shadow="true">
            <section class="card-content" @click="isExpand = !isExpand">
              <div class="card-content__item">
                <img src="../assets/img/car.png" alt="">
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  车系
                </div>
                <div class="card-content__item--content">
                  <h2>BMW320LI</h2>
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  现有库存 / 全部库存
                </div>
                <div class="card-content__item--content">
                  <div class="stock">
                    <span class="less">12</span> / 50
                  </div>
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  预计交车时间
                </div>
                <div class="card-content__item--content">
                  {{$moment().format("YYYY-MM-DD")}}
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  金额
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
            </section>
            <section class="card-content expand-content" v-if="isExpand">
              <div class="card-content__item">
                <div class="card-content__item--label">
                  经销商代码
                </div>
                <div class="card-content__item--content">
                  666666
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  PM/BANK
                </div>
                <div class="card-content__item--content">
                  1233546
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  订单类型
                </div>
                <div class="card-content__item--content">
                  {{$moment().format("YYYY-MM-DD")}}
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  ReqProdWeek
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  品牌
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  车型
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  外观颜色
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  内饰
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  配置
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  数量
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
            </section>
          </Card>
        </div>
        <div class="card-item">
          <div class="check">
            <Checkbox>&nbsp;</Checkbox>
          </div>
          <Card :shadow="true">
            <section class="card-content">
              <div class="card-content__item">
                <img src="../assets/img/car.png" alt="">
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  车系
                </div>
                <div class="card-content__item--content">
                  <h2>BMW320LI</h2>
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  现有库存 / 全部库存
                </div>
                <div class="card-content__item--content">
                  <div class="stock">
                    <span class="">32</span> / 50
                  </div>
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  预计交车时间
                </div>
                <div class="card-content__item--content">
                  {{$moment().format("YYYY-MM-DD")}}
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  金额
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
            </section>
          </Card>
        </div>
      </div>
      <div class="card-title">最优匹配</div>
      <div class="card optimal">
        <div class="card-item">
          <div class="check">
            <Checkbox>&nbsp;</Checkbox>
          </div>
          <Card :shadow="true">
            <section class="card-content">
              <div class="card-content__item">
                <img src="../assets/img/car.png" alt="">
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  车系
                </div>
                <div class="card-content__item--content">
                  <h2>BMW320LI</h2>
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  现有库存 / 全部库存
                </div>
                <div class="card-content__item--content">
                  <div class="stock">
                    <span class="less">12</span> / 50
                  </div>
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  预计交车时间
                </div>
                <div class="card-content__item--content">
                  {{$moment().format("YYYY-MM-DD")}}
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  金额
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
            </section>
            <section class="card-content expand-content">
              <div class="card-content__item">
                <div class="card-content__item--label">
                  经销商代码
                </div>
                <div class="card-content__item--content">
                  666666
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  PM/BANK
                </div>
                <div class="card-content__item--content">
                  1233546
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  订单类型
                </div>
                <div class="card-content__item--content">
                  {{$moment().format("YYYY-MM-DD")}}
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  ReqProdWeek
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  品牌
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  车型
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  外观颜色
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  内饰
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  配置
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  数量
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
            </section>
          </Card>
        </div>
      </div>
      <div class="card-title">推荐匹配</div>
      <div class="card recommend">
        <div class="card-item">
          <div class="check">
            <Checkbox>&nbsp;</Checkbox>
          </div>
          <Card :shadow="true">
            <section class="card-content">
              <div class="card-content__item">
                <img src="../assets/img/car.png" alt="">
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  车系
                </div>
                <div class="card-content__item--content">
                  <h2>BMW320LI</h2>
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  现有库存 / 全部库存
                </div>
                <div class="card-content__item--content">
                  <div class="stock">
                    <span class="less">2</span> / 50
                  </div>
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  预计交车时间
                </div>
                <div class="card-content__item--content">
                  {{$moment().format("YYYY-MM-DD")}}
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  金额
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
            </section>
            <section class="card-content expand-content">
              <div class="card-content__item">
                <div class="card-content__item--label">
                  经销商代码
                </div>
                <div class="card-content__item--content">
                  666666
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  PM/BANK
                </div>
                <div class="card-content__item--content">
                  1233546
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  订单类型
                  <Tooltip placement="top">
                    <Icon type="ios-information-circle" />
                    <div slot="content">
                      <div>
                        <p>ZCC-7000</p>
                        实际
                      </div>
                      <div>
                        <p>W20</p>
                        目标
                      </div>
                    </div>
                  </Tooltip>
                </div>
                <div class="card-content__item--content">
                  {{$moment().format("YYYY-MM-DD")}}
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  ReqProdWeek
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  品牌
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  车型
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  外观颜色
                  <Tooltip placement="top">
                    <Icon type="ios-information-circle" />
                    <div slot="content">
                      <div>
                        <p>ZCC-7000</p>
                        实际
                      </div>
                      <div>
                        <p>W20</p>
                        目标
                      </div>
                    </div>
                  </Tooltip>
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  内饰
                  <Tooltip placement="top">
                    <Icon type="ios-information-circle" />
                    <div slot="content">
                      <div>
                        <p>ZCC-7000</p>
                        实际
                      </div>
                      <div>
                        <p>W20</p>
                        目标
                      </div>
                    </div>
                  </Tooltip>
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  配置
                  <Tooltip placement="top">
                    <Icon type="ios-information-circle" />
                    <div slot="content">
                      <div>
                        <p>ZCC-7000</p>
                        实际
                      </div>
                      <div>
                        <p>W20</p>
                        目标
                      </div>
                    </div>
                  </Tooltip>
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  数量
                </div>
                <div class="card-content__item--content">
                  ¥323800
                </div>
              </div>
            </section>
          </Card>
        </div>
      </div>
    </main>
    <footer>
      <div class="wrapper">
        <Checkbox>全选</Checkbox>
        <Button>确定</Button>
      </div>
    </footer>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Menus from '@/components/Menu.vue'
  import echarts from 'echarts'
  export default {
    name: 'unpaid',
    components: {
      Header,
      Menus
    },
    props: {},
    data() {
      return {
        isExpand: false,
        chart: null,
        dataList: [],
        dateStr: []
      }
    },
    watch: {},
    computed: {},
    methods: {
      initChart() {
        this.chart = echarts.init(this.$refs.myEchart, { width: 350, heigh: 42 });
        console.log(this.$refs.myEchart);
        // 把配置和数据放这里

        var option = {
          color: ['#3398DB'],
          xAxis: [
          {
            type: 'category',
            data: ['qiantian', 'zuotian', 'jintian'],
            show: false
          }],
          yAxis: [
          {
            type: 'value',
            show: false
          }],
          series: [
          {
            type: 'bar',
            data: [10, 8, 2],
          }]
        };



        // 使用刚指定的配置项和数据显示图表。
        this.chart.setOption(option);
      },
    },
    created() {

    },
    mounted() {
      this.initChart();
    }
  }

</script>
<style lang="scss" scoped>


</style>

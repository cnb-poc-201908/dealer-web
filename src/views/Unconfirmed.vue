<template>
  <div class="container">
    <Header>
      <Menus active-name="1"></Menus>
    </Header>
    <main>
      <div class="card-title">完全匹配</div>
      <div class="card perfect">
        <div class="card-item" :class="{expand: isExpand}">
          <div class="check">
            <Checkbox>&nbsp;</Checkbox>
          </div>
          <Card :shadow="true">
            <section class="card-content basic-content" @click="isExpand = !isExpand">
              <div class="card-content__item img">
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
              <div class="card-content__item" style="flex:2">
                <div class="card-content__item--label">
                  匹配度
                </div>
                <div class="card-content__item--content">
                  <Progress :percent="100" />
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
                  BMW
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
                  <span class="car_color" :class="color"></span>
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
              <div class="card-content__item" style="flex: 3">
                <div class="card-content__item--label">
                  配置
                </div>
                <div class="card-content__item--content">
                  <p>Lumbar support for driver and front passenger</p>
                  <p>Cruise control with braking function</p>
                  <p>Cruise control with braking function</p>
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  数量
                </div>
                <div class="card-content__item--content">
                  90
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
              <div class="card-content__item img">
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
                  匹配度
                </div>
                <div class="card-content__item--content">
                  <Progress :percent="25" />
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
                  匹配度
                </div>
                <div class="card-content__item--content">
                  <Progress :percent="90" />
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
                  匹配度
                </div>
                <div class="card-content__item--content">
                  <Progress :percent="25" />
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
        <Button @click="onSubmit">确定</Button>
      </div>
    </footer>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Menus from '@/components/Menu.vue'
  export default {
    name: 'unconfirmed',
    components: {
      Header,
      Menus
    },
    props: {},
    data() {
      return {
        isExpand: false,
        color: "blue",
      }
    },
    watch: {},
    computed: {},
    methods: {
      onSubmit() {
        this.$router.push({ path: 'unpaid', query: { id: this.$route.query.id } })
      }
    },
    created() {
      console.log(this.$route.query.id);
    },
    mounted() {}
  }

</script>
<style lang="scss" scoped>


</style>

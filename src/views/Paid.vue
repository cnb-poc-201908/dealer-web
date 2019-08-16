<template>
  <div class="container">
    <Header>
      <Menus active-name="1"></Menus>
    </Header>
    <main>
      <div class="card">
        <div class="card-item" :class="{expand: isExpand}">
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
                  车架号
                </div>
                <div class="card-content__item--content">
                  <h3>WBAHN81027DT225</h3>
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
                  车架号
                </div>
                <div class="card-content__item--content">
                  <h3>WBAHN81027DT225</h3>
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
        <div class="card-item">
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
                  车架号
                </div>
                <div class="card-content__item--content">
                  <h3>WBAHN81027DT225</h3>
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
        <div class="card-item">
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
                  车架号
                </div>
                <div class="card-content__item--content">
                  <h3>WBAHN81027DT225</h3>
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
    </main>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Menus from '@/components/Menu.vue'
  export default {
    name: 'paid',
    components: {
      Header,
      Menus
    },
    props: {},
    data() {
      return {
        isExpand: false
      }
    },
    watch: {},
    computed: {},
    methods: {},
    created() {},
    mounted() {}
  }

</script>
<style lang="scss" scoped>


</style>

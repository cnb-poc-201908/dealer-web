<template>
  <div class="container">
    <Header>
      <Menus active-name="2"></Menus>
    </Header>
    <main>
      <div class="card">
        <div class="card-item" v-for="(item, index) in dataGroup" :key="index">
          <div class="check">
            <input type="checkbox" name="checkbox" id="" v-model="checkList" :value="item.orderIds">
          </div>
          <Card :shadow="true">
            <section class="card-content basic-content" @click="item.isExpand = !item.isExpand">
              <div class="card-content__item img">
                <img src="../assets/img/car.png" alt="">
              </div>
              <div class="card-content__item" style="flex:2">
                <div class="card-content__item--label">
                  车系
                </div>
                <div class="card-content__item--content">
                  <h2>BMW320LI</h2>
                </div>
              </div>
              <div class="card-content__item" style="flex:2">
                <div class="card-content__item--label">
                  现有库存 / 全部库存
                </div>
                <div class="card-content__item--content">
                  <div class="stock">
                    <span :class="{less: item.remain < 50}">{{item.remain}}</span> / {{item.totalRemain}}
                  </div>
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  外观颜色
                </div>
                <div class="card-content__item--content">
                  <Tooltip placement="top">
                    <span class="car_color" :class="item.colorDesc"></span>
                    <div slot="content">
                      {{item.colorDesc}}
                    </div>
                  </Tooltip>
                </div>
              </div>
              <div class="card-content__item" style="flex:2">
                <div class="card-content__item--label">
                  内饰
                </div>
                <div class="card-content__item--content">
                  {{item.upholsteryDesc}}
                </div>
              </div>
              <div class="card-content__item">
                <div class="card-content__item--label">
                  数量
                </div>
                <div class="card-content__item--content">
                  {{item.amount}}
                </div>
              </div>
              <div class="card-content__item" style="flex:2">
                <div class="card-content__item--label">
                  金额
                </div>
                <div class="card-content__item--content">
                  {{item.totalPrice | currency}}
                </div>
              </div>
            </section>
            <section class="card-content expand-content" v-if="item.isExpand">
              <template v-for="(o, index) in item.orders">
                <div class="card-group" :key="index">
                  <div class="card-content__item">
                    <div class="card-content__item--label">
                      经销商代码
                    </div>
                    <div class="card-content__item--content">
                      {{o.dealerId}}
                    </div>
                  </div>
                  <div class="card-content__item">
                    <div class="card-content__item--label">
                      预计交车时间
                    </div>
                    <div class="card-content__item--content">
                      {{o.apw}}
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
                      <Tooltip placement="top" v-if="!o.configCodeMatched">
                        <Icon type="ios-information-circle" />
                        <div slot="content">
                          <div>
                            <p>{{o.configDesc}}</p>
                            实际
                          </div>
                          <div>
                            <p>{{o.configDescT}}</p>
                            目标
                          </div>
                        </div>
                      </Tooltip>
                    </div>
                    <div class="card-content__item--content">
                      {{o.configDesc}}
                    </div>
                  </div>
                  <div class="card-content__item">
                    <div class="card-content__item--label">
                      外观颜色
                    </div>
                    <div class="card-content__item--content">
                      <Tooltip placement="top">
                        <span class="car_color" :class="o.colorDesc"></span>
                        <div slot="content">
                          {{o.colorDesc}}
                        </div>
                      </Tooltip>
                    </div>
                  </div>
                  <div class="card-content__item">
                    <div class="card-content__item--label">
                      内饰
                    </div>
                    <div class="card-content__item--content">
                      {{o.upholsteryDesc}}
                    </div>
                  </div>
                  <div class="card-content__item" style="flex: 3">
                    <div class="card-content__item--label">
                      配置
                      <Tooltip placement="top" v-if="!o.addCodeMatched">
                        <Icon type="ios-information-circle" />
                        <div slot="content">
                          <div>
                            <p v-for="(b, index) in o.addDescs" :key="index">{{b}}</p>
                            实际
                          </div>
                          <div>
                            <p v-for="(b, index) in o.addDescsT" :key="index">{{b}}</p>
                            目标
                          </div>
                        </div>
                      </Tooltip>
                    </div>
                    <div class="card-content__item--content">
                      <p v-for="(a, index) in o.addDescs" :key="index">{{a}}</p>
                    </div>
                  </div>
                </div>
              </template>
            </section>
          </Card>
        </div>
      </div>
    </main>
    <footer>
      <div class="wrapper">
        <Button @click="onSubmit">确定付款</Button>
      </div>
    </footer>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Menus from '@/components/Menu.vue'
  import api from '@/http'
  export default {
    name: 'unpaid',
    components: {
      Header,
      Menus
    },
    props: {},
    data() {
      return {
        dealerId: this.$route.query.dealerId,
        isExpand: false,
        checkList: [],
        dataGroup: [],
        msg: null,
      }
    },
    watch: {},
    computed: {},
    methods: {
      onGetData() {
        this.dataGroup = [];
        api.getUnPaid(this.dealerId).then((res) => {
          _.forEach(res.data.data, (value) => {
            value.isExpand = false;
            this.dataGroup.push(value);
          });
          console.log(this.dataGroup);
          setTimeout(this.msg, 0);
        })
      },
      onSubmit() {
        let _this = this;
        console.log(this.checkList);
        api.setStatus(3, this.checkList).then((res) => {
          console.log(res);
          setTimeout(this.msg, 0);
          this.$Message.success({
            content: '订单提交成功',
            onClose() {
              _this.$router.push({ path: 'paid', query: { dealerId: _this.dealerId } })
            }
          })
        }).catch((reason) => {
          setTimeout(msg, 0);
          this.$Message.error('提交错误');
        })
      },
      onPull() {
        api.getPull(this.dealerId).then((res) => {
          console.log(res.data);
        });
      }
    },
    created() {
      this.msg = this.$Message.loading({
        content: '订单提交...',
        duration: 0
      });
      this.onGetData();
      console.log(this.$route.query.dealerId);
    },
    mounted() {
      this.onPull();
      setInterval(() => {
        // this.onGetData();
      }, 1500);
    }
  }

</script>
<style lang="scss" scoped>


</style>

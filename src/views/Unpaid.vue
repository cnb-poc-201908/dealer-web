<template>
  <div class="container">
    <Header>
      <Menus active-name="2"></Menus>
    </Header>
    <main>
      <template v-for="(item, index) in dataGroup">
        <section :key="index">
          <div class="card-title">{{item.title}}</div>
          <div class="card" :class="item.type">
            <div class="card-item" v-for="(car, i) in item.list" :key="i">
              <div class="check">
                <input type="checkbox" name="checkbox" id="" v-model="checkList" :value="car.orderIds">
              </div>
              <Card :shadow="true">
                <section class="card-content basic-content" @click="car.isExpand = !car.isExpand">
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
                      数量
                    </div>
                    <div class="card-content__item--content">
                      {{car.amount}}
                    </div>
                  </div>
                  <div class="card-content__item">
                    <div class="card-content__item--label">
                      金额
                    </div>
                    <div class="card-content__item--content">
                      {{car.totalPrice | currency}}
                    </div>
                  </div>
                </section>
                <section class="card-content expand-content" v-if="car.isExpand">
                  <template v-for="(o, index) in car.orders">
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
                          ReqProdWeek
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
                          <Tooltip placement="top" v-if="!o.colorMatched">
                            <Icon type="ios-information-circle" />
                            <div slot="content">
                              <div>
                                <p>{{o.colorDesc}}</p>
                                实际
                              </div>
                              <div>
                                <p>{{o.colorDescT}}</p>
                                目标
                              </div>
                            </div>
                          </Tooltip>
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
                          <Tooltip placement="top" v-if="!o.upholsteryMatched">
                            <Icon type="ios-information-circle" />
                            <div slot="content">
                              <div>
                                <p>{{o.upholsteryDesc}}</p>
                                实际
                              </div>
                              <div>
                                <p>{{o.upholsteryDescT}}</p>
                                目标
                              </div>
                            </div>
                          </Tooltip>
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
        </section>
      </template>
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
      }
    },
    watch: {},
    computed: {},
    methods: {


      onGetData() {
        const msg = this.$Message.loading({
          content: '获取数据中...',
          duration: 0
        });
        let perfectGroup = {
            title: "",
            type: "",

            list: []
          },
          optimalGroup = {
            title: "",
            type: "",
            orderId: [],
            list: []
          },
          recommendGroup = {
            title: "",
            type: "",
            orderId: [],
            list: []
          };
        api.getConfirm(this.dealerId).then((res) => {
          console.log(res.data.data);
          _.forEach(res.data.data, (value) => {
            console.log(value);
            value.isExpand = false;
            value.orderId = [];
            if (value.matchRate == 100) {
              perfectGroup.title = "完全匹配";
              perfectGroup.type = "perfect";
              perfectGroup.list.push(value);
            } else if (value.matchRate >= 80 && value.matchRate <= 99) {
              optimalGroup.title = "最优匹配";
              optimalGroup.type = "optimal";
              optimalGroup.list.push(value);
            } else {
              recommendGroup.title = "推荐匹配";
              recommendGroup.type = "recommend";
              recommendGroup.list.push(value);
            }
          });
          if (perfectGroup.list.length !== 0) this.dataGroup.push(perfectGroup);
          if (optimalGroup.list.length !== 0) this.dataGroup.push(optimalGroup);
          if (recommendGroup.list.length !== 0) this.dataGroup.push(recommendGroup);
          // this.dataGroup = [perfectGroup, optimalGroup, recommendGroup]
          setTimeout(msg, 0);
          console.log(this.dataGroup);
        })
      },
      onSubmit() {
        let _this = this;
        const msg = this.$Message.loading({
          content: '订单提交...',
          duration: 0
        });
        console.log(this.checkList);
        api.sendConfirm(this.dealerId, this.checkList).then((res) => {
          console.log(res);
          setTimeout(msg, 0);
          this.$Message.success({
            content: '订单提交成功',
            onClose() {
              _this.$router.push({ path: 'paid', query: { id: _this.$route.query.id } })
            }
          })
        }).catch((reason) => {
          setTimeout(msg, 0);
          this.$Message.error('提交错误');
        })
      }
    },
    created() {
      this.onGetData();
      console.log(this.$route.query.dealerId);
    },
    mounted() {

    }
  }

</script>
<style lang="scss" scoped>


</style>

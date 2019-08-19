<template>
  <Menu mode="horizontal" theme="dark" :active-name="activeName">
    <MenuItem name="1">
    <router-link :to="{ path: 'unconfirmed', query: { dealerId: dealerId }}">待确定</router-link>
    </MenuItem>
    <MenuItem name="2">
    <router-link :to="{ path: 'unpaid', query: { dealerId: dealerId }}">待付款</router-link>
    </MenuItem>
    <MenuItem name="3">
    <router-link :to="{ path: 'paid', query: { dealerId: dealerId }}">已付款</router-link>
    </MenuItem>
  </Menu>
</template>

<script>
  export default {
    components: {},
    props: {
      activeName: String,
    },
    data() {
      return {
        dealerId: this.$route.query.dealerId,
      }
    },
    watch: {},
    computed: {},
    methods: {},
    created() {
      console.log(this.$route.query.dealerId);
    },
    mounted() {}
  }

</script>
<style lang="scss" scoped>


</style>

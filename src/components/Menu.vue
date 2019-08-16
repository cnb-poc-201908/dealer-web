<template>
  <Menu mode="horizontal" theme="dark" :active-name="activeName">
    <MenuItem name="1">
    <router-link to="/">待确定</router-link>
    </MenuItem>
    <MenuItem name="2">
    <router-link to="/unpaid">待付款</router-link>
    </MenuItem>
    <MenuItem name="3">
    <router-link to="/paid">已付款</router-link>
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
      return {}
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

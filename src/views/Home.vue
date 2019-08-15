<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Button type="primary">Primary</Button>
    <Button>Primary</Button>
    <icon name="map" :scale="20"></icon>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import api from '@/http'

  export default {
    name: 'home',
    components: {
      HelloWorld
    },
    created() {
      console.log(this.$moment().format('YYYY-MM-DD'));
      api.getData().then(res => {
        console.log(res.data);
      })
    },
  }

</script>

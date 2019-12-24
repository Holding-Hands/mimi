<template>
	<div>
		<van-search placeholder="请输入搜索关键词" v-model="value" />
	</div>
</template>

<script>
  import Vue from 'vue';
  import {Search} from 'vant';

  Vue.use(Search);
  export default {
    name: "Search",
	  data(){
      return {
        value:''
      }
	  }
  }
</script>

<style scoped>

</style>

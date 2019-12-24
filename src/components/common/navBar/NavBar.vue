<template>
	<div id="nav-bar">
		<van-nav-bar :title="title" :left-arrow="left_arrow" :fixed="isFixed">

		</van-nav-bar>
	</div>
</template>

<script>
  import Vue from 'vue';
  import {NavBar} from 'vant';

  Vue.use(NavBar);

  export default {
    name: "NavBar",
    props: {
      title: {
        type: String,
        default() {
          return ''
        }
      },
      left_text: {
        type: String,
      },
      isFixed: {
        type: Boolean,
        default() {
          return false
        }
      },
      left_arrow:{
        type:Boolean
      }
    }
  }
</script>

<style scoped lang="less">
	#nav-bar .van-nav-bar {

		background-color: #ff8313;

		.van-nav-bar__title{
			color: #2b2b2b !important;
			font-size: 20px;
			font-family: 'Calligraffitti', cursive;
		}
	}
</style>

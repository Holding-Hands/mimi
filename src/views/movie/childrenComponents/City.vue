<template>
	<div>
<!--		<van-cell is-link @click="showPopup">aaaa</van-cell>-->

		<van-popup v-model="isShow" position="bottom" :overlay="isOverlay" >
			<van-area
							:area-list="areaList"
							value="110101"
							@confirm="confirm"
							@cancel="cancel"
							:columns-num="2"
							ref="area"
			></van-area>
		</van-popup>

	</div>
</template>

<script>
  import Vue from 'vue';
  import {Area} from 'vant';
  import {Popup} from 'vant';
  import {Cell, CellGroup} from 'vant';
  Vue.use(Cell).use(CellGroup);
  Vue.use(Popup);
  Vue.use(Area);

  import areaList from 'assets/js/area'

  import {getCityList} from "network/request/recommend";
  import {address} from "network/request/request";

  export default {
    name: "City",
    data() {
      return {
        isOverlay: true,
        areaList: areaList,
        isShow: false,
      }
    },
    methods: {
      showPopup() {
        this.isShow = true;
      },
      confirm(value) {
        //获取返回数据，返回数据在value里
        this.isShow=!this.isShow;
        console.log(value);
        this.$store.state.city=value;

      },
      cancel(){
        console.log(this.city);
        this.isShow=!this.isShow;
      }
    },
    mounted() {
      this.showPopup();
      getCityList().then(res=>{
        console.log(res);
      })

      address().then(res=>{
        console.log(res);
      })
    }
  }
</script>

<style scoped>

</style>

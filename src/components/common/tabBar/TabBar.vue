<template>
	<div>
		<van-tabbar v-model="active"  active-color="hotpink">
			<van-tabbar-item to="/movie">
				<van-icon class="icon iconfont"
				          class-prefix="icon"
				          slot="icon"
				          slot-scope="props"
				          :name="props.active ? icon_active:icon_inactive"
				          size="21">
				</van-icon>
				<span>电影</span>
			</van-tabbar-item>

			<van-tabbar-item to="/cinema">
				<van-icon class="icon iconfont"
				          class-prefix="icon"
				          slot="icon"
				          slot-scope="props"
				          name="yingyuan"
				          size="21">
				</van-icon>
				<span>影院</span>
			</van-tabbar-item>

			<van-tabbar-item to="/profile">
				<van-icon class="icon iconfont"
				          class-prefix="icon"
				          slot="icon"
				          slot-scope="props"
				          name="wode"
				          size="21">
				</van-icon>
				<span>我的</span>
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
  import Vue from 'vue';
  import {Tabbar, TabbarItem} from 'vant';
  import {Icon} from 'vant';

  Vue.use(Icon);
  Vue.use(Tabbar).use(TabbarItem);
  export default {
    name: "TabBar",
    data() {
      return {
        active: 0,
        icon_active: 'dianying1',
        icon_inactive: 'dianying1',
      }
    }
  }
</script>

<style scoped>

</style>

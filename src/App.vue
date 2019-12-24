<template>
	<div id="app">
		<TabBar></TabBar>
		<transition >
			<keep-alive>

				<router-view/>

			</keep-alive>
		</transition>
	</div>
</template>
<script>
  import TabBar from 'components/common/tabBar/TabBar'

  export default {
    name: 'App',
    components: {
      TabBar
    }
  }
</script>
<style lang="less">
	@import 'assets/css/base.css';

	.v-enter {
		opacity: 0;
		transform: translate(100%);
	}

	.v-leave-to {
		opacity: 0;
		transform: translate(-100%);
		position: absolute;
	}

	.v-enter-active,
	.v-leave-active {
		transition: all .4s ease-in;
	}
</style>

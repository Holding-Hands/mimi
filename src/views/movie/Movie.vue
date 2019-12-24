<template>
	<div>
		<nav-bar :title="'咪咪电影'" :is-fixed="isFixed" :left_arrow="left_arrow"/>
		<tab-control/>
		<router-view/>
		<tab-bar/>
	</div>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'
  import TabBar from 'components/common/tabBar/TabBar'
  import TabControl from 'components/content/tabControl/TabControl'

  export default {
    name: "Home",
    components: {
      NavBar,
      TabBar,
      TabControl
    },
    data() {
      return {
        isFixed: false,
        left_arrow: false,
      }
    }
  }
</script>

<style scoped>

</style>

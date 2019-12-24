<template>
	<div>
		<nav-bar :title="'咪咪影院'"/>
		<h1>cinema</h1>
		<tab-bar/>
	</div>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'
  import TabBar from 'components/common/tabBar/TabBar'

  export default {
    name: "Cinema",
    components: {
      NavBar,
      TabBar
    }
  }
</script>

<style scoped>

</style>

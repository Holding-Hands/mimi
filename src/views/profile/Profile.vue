<template>
	<div>
		<nav-bar :title="'我的咪咪'"/>
		<tab-bar/>
		<h1>profile</h1>
	</div>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'
  import TabBar from 'components/common/tabBar/TabBar'
  export default {
    name: "Profile",
	  components:{
      TabBar,
      NavBar
	  }
  }
</script>

<style scoped>

</style>

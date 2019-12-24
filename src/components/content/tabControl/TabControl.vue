<template>
	<div class="tab-control">

		<router-link
						tag="div"
						to="city"
						class="tab-control-item"
						>
			<span>{{this.$store.state.city[1].name|CityFilter}}<i class="iconfont icon-sanjiao1"></i></span>
		</router-link>

		<router-link
						tag="div"
						to="now"
						class="tab-control-item"
						:class="{active:shows===1}"
						@click.native="itemClick1()">
			<span>正在上映</span>
		</router-link>

		<router-link
						tag="div"
						to="future"
						class="tab-control-item"
						:class="{active:shows===2}"
						@click.native="itemClick2()">
			<span>即将上映</span>
		</router-link>

		<router-link
						tag="div"
						class="tab-control-item"
						:class=""
						to="search"
		>
			<span><i class="iconfont icon-iconsmallsearch"></i></span>
		</router-link>
	</div>
</template>

<script>
  export default {
    name: "TabControl",
    data() {
      return {
        shows: 1,
      }
    },

    methods: {
      itemClick1() {
        this.shows = 1;
      },
      itemClick2() {
        this.shows = 2;
      }
    },
	  filters:{
      CityFilter(value){
        let result=value
        if (value.length>4) {
          result=result.slice(0,4)+'...'
        }
        return result
		  }
	  }
  }
</script>

<style scoped lang="less">
	.tab-control {
		display: flex;
		border-bottom: 1px solid #f9f2f4;

		.tab-control-item {
			flex: 1;
			text-align: center;
			height: 44px;
			line-height: 44px;
			font-size: 16px;
		}
	}

	.active {
		color: deeppink;

		span {
			border-bottom: 3px solid var(--color-tint);
			padding: 4px;
		}
	}
</style>

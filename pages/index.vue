<template>
	<Content title="Home" />
</template>

<script>
import Content from '../components/Content.vue'

export default {
	components: {
		Content,
	},

	head() {
		return {
			title: 'Admin',
		}
	},
}
</script>

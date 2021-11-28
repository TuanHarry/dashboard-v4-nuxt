<template>
	<section>
		<Content title="Language" />

		<span class="text-gray-100">{{$t('home.lang')}}</span>

		<div class="pt-6 flex flex-row items-center space-x-4">
			<button
				class="bg-blue-300 text-gray-100 text-sm font-bold py-3 px-5 rounded"
				@click="changeLang('en')"
			>
				Tiếng Anh
			</button>
			<button
				class="bg-blue-300 text-gray-100 text-sm font-bold py-3 px-5 rounded"
				@click="changeLang('vi')"
			>
				Tiếng Việt
			</button>
		</div>
	</section>

</template>

<script>
import { mapMutations } from 'vuex'
import Content from '../../components/Content.vue'
export default {
	components: {
		Content,
	},

	methods: {
		...mapMutations({
			setLang: 'mutations/SET_LANG',
		}),

		changeLang(lang) {
			this.setLang(lang)
			this.$router.push({
				path: `${this.$router.currentRoute.path}?lang=${lang}`,
			})
		},
	},
}
</script>

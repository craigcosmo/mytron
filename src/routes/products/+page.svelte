<script lang="ts">
	import ProductForm from './productForm.svelte'
</script>

<div class="prodcuts">
	<ProductForm />
</div>

<style lang="scss">
	.prodcuts {
		padding: 20px;
	}
	.bar {
		display: flex;
		align-items: center;
		padding-left: 20px;
		padding-right: 20px;
		background: #fff;
		position: fixed;
		top: 60px;
		right: 0;
		left: 0;
		z-index: 90;
		height: 80px;
		max-width: 100%;
	}
</style>

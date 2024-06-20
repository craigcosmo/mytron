<script lang="ts">
	import Upload from './upload.svelte'
	const handleform = async () => {}
</script>

<h3 class=" mb-10 mt-5 text-center text-xl">upload now</h3>
<div class="ProductFormComponent">
	<form on:submit|preventDefault={handleform}>
		<div class="row">
			<label for="photo">Photos</label>
			<Upload handleSubmit={handleform} />
		</div>
	</form>
</div>

<style lang="scss">
	.ProductFormComponent {
		padding: 20px;
		padding-bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	form {
		min-width: 800px;
		max-width: 1050px;
		flex: 1;
		display: flex;
		flex-direction: row;
	}
	.col1 {
		flex: 1;
		margin-right: 30px;
	}
	.col2 {
		flex: 2.5;
		display: flex;
		flex-direction: column;
	}
	.createlistbtn {
		color: #fff;
		flex: 1;
		background-color: rgb(0, 217, 98);
		border-radius: 0.4rem;
		padding-left: 10px;
		padding-right: 10px;
		font-weight: bold;
		text-transform: capitalize;
		line-height: 45px;
		margin-top: 10px;
		transition:
			color 0.15s ease-in-out,
			background-color 0.15s ease-in-out,
			border-color 0.15s ease-in-out,
			box-shadow 0.15s ease-in-out;
	}
	.createlistbtn:hover {
		background-color: rgb(10, 173, 83);
	}
	.row {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
		textarea {
			padding-top: 20px;
			background-color: #fff;
			border: 1px solid #999;
			border-radius: 5px;
			padding-left: 10px;
			height: 10.4rem;
			max-height: 23rem;
			padding: 15px;
			line-height: 21px;
			width: 100%;
			font-size: 1rem;
		}
		:global(input) {
			background-color: #fff;
			border: 1px solid #999;
			border-radius: 5px;
			padding-left: 10px;
			width: 100%;
			height: 35px;
		}
		label {
			color: #111;
			text-transform: capitalize;
			margin-bottom: 0.4rem;
			font-weight: bold;
		}
	}
</style>

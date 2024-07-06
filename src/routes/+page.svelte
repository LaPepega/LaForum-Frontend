<script lang="ts">
	import { PostData } from "$lib/ApiStructures";
	let nickname: string;
	let postText: string;
	function newPost() {
		new PostData(nickname,postText).sendCreateRequest()
	}
</script>

<div class="mainDiv">
	<div class="bar">
		<h1>Posts</h1>
	</div>
	<div class="postBox">
		<div class="postBar">
			<input bind:value={nickname} type="text" id="nickInput" class="grayBorder" maxlength="26">
			<button on:click={newPost} id="postButton">Post!</button>
		</div>
		<textarea bind:value={postText} id="postInput" class="grayBorder"></textarea>
	</div>
</div>

<style>
	.mainDiv {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		display: flex;
		width: 100%;
		align-items: center;
		flex-direction: column;
		color: aliceblue;
	}

	.postBox {
		display:inline-flexbox;
		width: 50%;
		max-width: 700px;
		height: fit-content;
		display: flex;
		justify-content: center;
		flex-direction: column;
		font-family: inherit;
	}

	.grayBorder {
		border-width: 2px;
		border-style: solid;
		border-color: rgb(128, 128, 128);
		border-radius: 7px;
		font-family: inherit;
	}

	.postBar {
		display: grid;
		grid-template-columns: 70% 30%;
		grid-template-rows: 40px;
		grid-auto-flow: column;
		margin-bottom: 3px;
		font-family: inherit;
		width: 100%;
		flex-wrap: nowrap;
		white-space: nowrap;
	}

	#postInput {
		background-color: rgb(25, 22, 27);
		width: 100%;
		height: 230px;
		color: inherit;
		font-family: inherit;
		padding: 10px;
	}

	#nickInput {
		background-color: rgb(25, 22, 27);
		height: 35px;
		width: 100%;
		color: inherit;
		font-family: inherit;
		padding-left: 10px;
		font-size: 18px;
		margin-right: 10px;
	}

	#postButton {
		width: 100%;
		height: 40px;
		border-style: none;
		border-radius: 7px;
		font-family: inherit;
		font-size: 16px;
		padding-top: 4px;
		float: right;
		margin-left: 20px;
	}

	input:focus, select:focus, textarea:focus, button:focus {
    	outline: none;
	}

	h1 {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		color: aliceblue;
	}

</style>

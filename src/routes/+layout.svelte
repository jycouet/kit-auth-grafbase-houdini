<script lang="ts">
	import { page } from '$app/stores';

	$: user = $page.data.session?.user;
</script>

<svelte:head>
	<title>kit-auth-grafbase-houdini</title>
</svelte:head>

<h1>kit-auth-grafbase-houdini</h1>

<hr />

<nav class="flex">
	<ul class="flex">
		<li><a href="/">Home</a></li>
		<li><a href="/pricing">Pricing</a></li>
		<li><a href="/dashboard">Dashboard</a></li>
	</ul>
	<ul class="flex">
		{#if user}
			<li>
				<a class="flex" href="/me">
					<img class="avatar" src={user?.image} alt="User Avatar" />
					{user?.name}</a
				>
			</li>
			<a href="/auth/signout" data-sveltekit-preload-data="off">Logout</a>
		{:else}
			<li><a href="/auth/signin" data-sveltekit-preload-data="off">Login</a></li>
		{/if}
	</ul>
</nav>

<hr />

<slot />

<style>
	nav {
		justify-content: space-between;
		height: 2rem;
	}

	ul {
		gap: 1rem;

		list-style: none;
		margin-block: 0;
		padding-inline: 0;
	}

	.flex {
		display: flex;
		align-items: center;
	}

	.avatar {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		padding: 0.5rem;
	}
</style>

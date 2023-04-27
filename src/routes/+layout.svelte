<script lang="ts">
</script>

<svelte:head>
	<title>kit-auth-grafbase-houdini</title>
</svelte:head>

<h1>kit-auth-grafbase-houdini</h1>

<hr />

<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/pricing">Pricing</a></li>
		<li><a href="/dashboard">Dashboard</a></li>
	</ul>
	<ul>
		<li><a href="/#">Login</a></li>
		<li><a href="/me">MY NAME</a></li>
	</ul>
</nav>

<hr />

<slot />

<style>
	nav {
		display: flex;
		justify-content: space-between;
	}

	ul {
		display: flex;
		gap: 1rem;

		list-style: none;
		margin-block: 0;
		padding-inline: 0;
	}
</style>

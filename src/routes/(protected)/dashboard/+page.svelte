<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ Todos } = data);
</script>

<h2>Dashboard</h2>

<ul>
	{#each $Todos.data?.todoCollection?.edges ?? [] as edge}
		<li>
			{edge?.node.title}
		</li>
	{/each}
</ul>

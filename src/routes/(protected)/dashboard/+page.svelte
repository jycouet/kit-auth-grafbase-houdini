<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ KPI } = data);
</script>

<h2>Dashboard</h2>

<ul>
	{#each $KPI.data?.kPICollection?.edges ?? [] as edge}
		<li>
			{edge?.node.title} - target: {edge?.node.target}
		</li>
	{/each}
</ul>

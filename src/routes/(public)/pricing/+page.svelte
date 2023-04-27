<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ Pricing } = data);
</script>

<h2>Pricing</h2>

<ul>
	{#each $Pricing.data?.pricingCollection?.edges ?? [] as edge}
		<li>
			${edge?.node.value.toFixed(2)} - {edge?.node.title}
		</li>
	{/each}
</ul>

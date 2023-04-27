<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ Pricing } = data);
</script>

<h2>Pricing</h2>

{#if $Pricing.errors}
	<pre>Waiting for `Grafbase`, `@auth`, `public` (or something similar)</pre>
	{#each $Pricing.errors as error}
		<p>{error.message}</p>
	{/each}
{/if}

<ul>
	{#each $Pricing.data?.pricingCollection?.edges ?? [] as edge}
		<li>
			${edge?.node.value.toFixed(2)} - {edge?.node.title}
		</li>
	{/each}
</ul>

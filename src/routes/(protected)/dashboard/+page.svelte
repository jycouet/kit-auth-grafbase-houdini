<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({} = data);
</script>

<h2>Dashboard</h2>

<script lang="ts">
	import { page } from '$app/stores';
</script>

<h2>Me</h2>

<pre>{JSON.stringify($page.data.session, null, 2)}</pre>

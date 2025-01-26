<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	type Props = SVGAttributes<EventTarget>;
	let restProps: Props = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	stroke-width="1"
	fill="none"
	{...restProps}
>
	<circle cx="12" cy="12" r="10" />
	<circle cx="9" cy="10" r="1" />
	<circle cx="15" cy="10" r="1" />
	<line x1="8" y1="15" x2="16" y2="15" />
	<slot />
</svg>

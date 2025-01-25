<script>
	let links = [
		{ label: 'Animation', href: '/animation' },
		{ label: 'Branding', href: '/branding' },
		{ label: 'Illustration', href: '/illustration' }
	];
	let activeCategory = 'Branding';

	const isActive = (category) => activeCategory === category.label;
</script>

<div class="flex justify-center items-center h-screen bg-gradient-to-b from-black to-blue-900">
	<nav>
		<ul class="flex gap-8">
			{#each links as { label, href }}
				<li class="relative">
					<a
						{href}
						aria-current={isActive({ label }) ? 'page' : undefined}
						class={`text-xl font-semibold transition-all duration-300 ${
							isActive({ label }) ? 'text-white' : 'text-gray-500 hover:text-gray-300'
						} focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black`}
					>
						{label}
						{#if isActive({ label })}
							<span
								class="absolute left-1/2 -translate-x-1/2 -bottom-3 w-10 h-1 bg-white rounded-lg"
								aria-hidden="true"
							></span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>

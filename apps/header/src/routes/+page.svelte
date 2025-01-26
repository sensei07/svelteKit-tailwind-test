<script>
	import HeroBackgroundImage from '$lib/assets/hero-bg.webp?enhanced';
	import HeroDecorImage from '$lib/assets/hero-decor-1.webp?enhanced';
	import HeroDecorImage2 from '$lib/assets/hero-decor-1.webp?enhanced';

	const languages = ['ENG', 'FR'];
	let activeLanguage = 'ENG';

	const changeLanguage = (language) => {
		activeLanguage = language;
	};
</script>

<header class="absolute z-10 w-full h-32 flex items-center justify-between px-14 lg:px-20">
	<button class="flex items-center gap-8 text-white">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32px"
			height="32px"
			viewBox="0 0 24 24"
			fill="none"
			>
			<path d="M4 18L20 18" stroke="#fff" stroke-width="2" stroke-linecap="round" />
			<path d="M4 12L20 12" stroke="#fff" stroke-width="2" stroke-linecap="round" />
			<path d="M4 6L20 6" stroke="#fff" stroke-width="2" stroke-linecap="round" />
		</svg>
		<span>Menu</span>
	</button>
	<ul class="flex gap-6">
		{#each languages as language}
			<li>
				<button
					class={activeLanguage === language ? 'text-black font-bold' : 'text-gray-500'}
					on:click={() => changeLanguage(language)}
				>
					{language}
				</button>
			</li>
		{/each}
	</ul>
</header>

<div class="h-screen flex">
	<div class="relative flex-[6]">
		<enhanced:img
			src={HeroBackgroundImage}
			alt="Blonde-haired person in a black backless garment"
			class="w-full h-full object-cover"
		/>
		<div class="absolute inset-0 flex flex-col justify-end w-full gap-20 text-white p-14 lg:p-20">
			<div class="flex items-center justify-between">
				<p class="text-sm max-w-10">Summer Collection 2020</p>
				<div class="flex items-center gap-4">
					<button>Next</button>
					<div class="h-0.5 w-24 bg-gray-400" />
					<button>Prev</button>
				</div>
			</div>
			<h1 class="text-7xl lg:text-9xl">Summer 2020</h1>
			<div class="flex justify-between">
				<ul class="flex gap-4">
					<li>
						<a
							href="https://www.facebook.com/"
							class="focus:outline-none focus:ring-2 focus:ring-black"
							aria-label="Visit Facebook">FB</a
						>
					</li>
					<li>
						<a
							href="https://www.pinterest.com/"
							class="focus:outline-none focus:ring-2 focus:ring-black"
							aria-label="Visit Pinterest">PIN</a
						>
					</li>
					<li>
						<a
							href="https://www.instagram.com/"
							class="focus:outline-none focus:ring-2 focus:ring-black"
							aria-label="Visit Instagram">IG</a
						>
					</li>
				</ul>
				<ul class="flex gap-20">
					<li>•</li>
					<li>•</li>
					<li>•</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="relative flex-[4] bg-gray-100 flex items-end p-14 lg:p-20">
		<div class="flex flex-col gap-8 w-full">
			<enhanced:img
				src={HeroDecorImage}
				alt="Person in black dress against wall"
				class="w-60 h-100 ml-auto translate-x-[-25%]"
			/>
			<div class="flex justify-between items-end gap-4">
				<enhanced:img src={HeroDecorImage2} alt="Person in black dress against wall" class="w-48 h-82" />
				<button
					class="h-14 w-52 text-black text-sm font-medium uppercase py-2 px-8 border border-black"
				>
					Shop now
				</button>
			</div>
		</div>
		<div class="absolute right-0 top-1/2 flex items-center gap-5 rotate-90 translate-x-1/4">
			<p class="text-sm">Ref. 68017787</p>
			<div class="h-0.5 w-24 bg-gray-400" />
			<p class="text-sm">White loose dress</p>
		</div>
	</div>
</div>

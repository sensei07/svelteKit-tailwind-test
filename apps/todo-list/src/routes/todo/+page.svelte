<script>
	import { onMount } from 'svelte';
	import SmileyIcon from '$lib/components/SmileyIcon.svelte';
	import NeutralIcon from '$lib/components/NeutralIcon.svelte';

	const STORAGE_KEY = 'todo-list';

	let tasks = [];
	let newTask = '';

	onMount(() => {
		const savedTasks = localStorage.getItem(STORAGE_KEY);
		tasks = savedTasks ? JSON.parse(savedTasks) : [];
	});

	function addTask() {
		if (newTask.trim()) {
			tasks = [...tasks, { text: newTask.trim(), completed: false }];
			saveTasks();
			newTask = '';
		}
	}

	function toggleTask(index) {
		tasks[index].completed = !tasks[index].completed;
		saveTasks();
	}

	function saveTasks() {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
	}
</script>

<div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
	<div class="relative w-96 bg-white shadow-md">
		<div class="text-center font-bold p-6">
			<h1 class="text-4xl text-gray-600">December</h1>
			<p class="text-lg text-violet-200 mt-4">Tuesday, December 22</p>
		</div>
		<div class="w-full h-1 bg-gray-100" />
		<div class="p-6">
			<ul class="space-y-2">
				{#each tasks as task, index}
					<li
						class="flex justify-between items-center cursor-pointer"
						tabindex="0"
						on:click={() => toggleTask(index)}
						on:keydown={(event) => {
							if (event.key === 'Enter' || event.key === ' ') toggleTask(index);
						}}
					>
						<span class="flex-1 text-gray-700 {task.completed && 'line-through text-gray-400'}">
							{task.text}
						</span>
						{#if task.completed}
							<SmileyIcon class="h-8 w-8 stroke-green-500">
								<span class="sr-only">Task completed</span>
							</SmileyIcon>
						{:else}
							<NeutralIcon class="h-8 w-8 stroke-gray-300">
								<span class="sr-only">Task not completed</span>
							</NeutralIcon>
						{/if}
					</li>
				{/each}
			</ul>

			<input
				type="text"
				bind:value={newTask}
				placeholder="Add Task"
				class="w-full p-4 my-8 placeholder:text-violet-200 border focus:outline-none focus:ring focus:ring-blue-200"
			/>
		</div>
		<button
			on:click={addTask}
			class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-32 h-10 bg-green-500 transition duration-300 hover:bg-green-600 text-white py-3 rounded-full flex items-center justify-center"
		>
			Add
		</button>
	</div>
</div>

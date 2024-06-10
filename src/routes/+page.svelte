<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { MoveDown, MoveUp } from 'lucide-svelte';
	import { Counter } from '$lib/count.svelte';

	let {data} = $props();

	console.log(data);
	// requirements
	//  Users
	// We need a diplay to show the current value of the counter
	// The user need to be able to increment the count
	// the user needs to be able to decrement the count
	// the user needs to be able to reset the count (to 0)
	// the user should be able to chose the increment amount

	const counter = Counter.create(0, 1);
</script>

<div class="grid h-screen w-screen place-content-center">
	<h1>Updated</h1>
	<div>
		<h1>Counter: {counter.display}</h1>

		<Button onclick={() => counter.increment()}>
			<MoveUp class="pointer-events-none h-3" />
		</Button>

		<Button onclick={() => counter.decrement()}>
			<MoveDown class="pointer-events-none h-3" />
		</Button>

		<Button onclick={() => counter.reset()}>Reset</Button>

		<label for="">
			<Input type="number" bind:value={counter.amount}></Input>
		</label>
	</div>
</div>

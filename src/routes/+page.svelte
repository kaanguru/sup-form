<script lang="ts">
	import type { PageData } from './$types';
	import { superForm, setMessage } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { _computerSchema } from '$lib/schemas';

	export let data: PageData;
	const { form, errors, message, constraints, enhance } = superForm(data.form, {
		SPA: true,
		validators: _computerSchema,
		onUpdate({ form }): void {
			setMessage(form, 'Valid data!');
		}
	});
</script>

<SuperDebug data={$form} />
<div class="container">
	<h1>add user</h1>

	{#if $message}<h3>{$message}</h3>{/if}

	<form method="POST" use:enhance>
		<label>
			<span>Name</span>
			<input name="name" bind:value={$form.name} {...$constraints.name} />
		</label>
		{#if $errors.name}<span class="invalid">{$errors.name}</span>{/if}
		<label>
			<span>Ip Address</span>
			<input
				name="ip_address"
				bind:value={$form.ip_address}
				autocomplete="ip_address"
				{...$constraints.ip_address}
			/>
		</label>
		{#if $errors.ip_address}
			<p>
				<span class="invalid">{$errors.ip_address}</span>
			</p>
		{/if}
		<button>Submit</button>
	</form>
</div>

<style>
	.container {
		@apply mx-auto max-w-screen-lg px-4 py-8;
	}
	.invalid {
		@apply my-4 block bg-warning-900 text-warning-300;
	}
	label {
		@apply my-2 block;
	}
</style>

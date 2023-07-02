<script>
    import Student from './Student.svelte';
    import Coach from './Coach.svelte';
	import { slide } from 'svelte/transition';

    export const options = [
        { role: 'student', component: Student},
        { role: 'coach', component:Coach}
    ];
    $: selected = options[0];
</script>

<div class="flex-row">
    <h2>Sign up as a </h2>
    <select bind:value={selected} class="border-blue">
        {#each options as option}
            <option value={option}>{option.role}</option>
        {/each}
    </select>
</div>

{#key selected.component}
    <div class="registration-grid" transition:slide>
        <svelte:component this={selected.component}/>
    </div>
{/key}

<style>
    .registration-grid{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 1em;
        column-gap: 2em;
		margin-top: 0.5em;
        padding-inline: 1em;
    }
    select {
        cursor: pointer;
        display: inline-flex;
        align-self: center;
        width: max-content;
        color: var(--color-light);
        background-color: var(--color-darkest);
        height: 1.5em;
        margin-left: 0.5em;
        width: fit-content;
    }
    option{
        text-align: center;
    }
    @media (max-width: 900px){
        .registration-grid{
            padding-inline: 0;
            row-gap: 2em;
        }
    }
</style>
<script lang="ts">
	export let name = "";
	export let address = "";
	export let description= "";
</script>

<h4 class:name>{name}</h4>
<p class:address>{address}</p>
<p class:description>
	{description}
</p>

<style>
    .name{
        color: var(--color-blue);
        
    }
    .address{
        color: var(--color-disabled);
        
    }
    .description{
        color: var(--color-light);
    }
</style>

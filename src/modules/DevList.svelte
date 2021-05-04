<script lang="ts">
    import { selectedResource, resources } from "../stores/stores";
    import DevItem from "./DevItem.svelte";
    let selectedResources;
    $: $selectedResource, setResources();
    const setResources = () => {
        for (let i = 0; i < $resources.length; i++) {
            if ($resources[i].title === $selectedResource) {
                selectedResources = $resources[i].resources;
                return;
            }
        }
    };
</script>

<div>
    {#each selectedResources as resource}
        <DevItem name={resource.name} id={resource.id} link={resource.link} />
    {/each}
</div>

<style>
</style>

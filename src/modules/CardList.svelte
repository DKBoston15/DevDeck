<script lang="ts">
    import Card from "./Card.svelte";
    import { list } from "../stores";
</script>

<ul>
    <!-- Figure out how to make TS work with spread operator -->

    {#each $list as link (link.id)}
        <Card name={link.name} link={link.link} category={link.category} />
    {/each}
</ul>

<style>
    ul {
        padding: 0;
    }
</style>

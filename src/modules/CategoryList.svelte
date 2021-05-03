<script lang="ts">
    import { categories } from "../stores";
    import CategoryItem from "./CategoryItem.svelte";
</script>

<div>
    <h5>Category List</h5>
    {#each $categories as category (category.id)}
        <CategoryItem icon={category.icon} title={category.title} />
    {/each}
</div>

<style>
</style>

<script lang="ts">
    import browser from "webextension-polyfill";
    import CategoryList from "./modules/CategoryList.svelte";
    import DevList from "./modules/DevList.svelte";
    import CategoryForm from "./modules/CategoryForm.svelte";
    import ResourceForm from "./modules/ResourceForm.svelte";
    import { page, categories } from "./stores/stores";

    // import { saveData } from "./background";
    // saveData($categories);
</script>

<main>
    {#if $page === "category"}
        <CategoryList />
        {JSON.stringify($categories)}
        <button on:click={() => page.set("categoryForm")}>Add Category</button>
        <button on:click={() => page.set("resourceForm")}>Add Resource</button>
    {/if}

    {#if $page === "resource"}
        <DevList />
        <button on:click={() => page.set("resourceForm")}>Add Resource</button>
        <button on:click={() => page.set("category")}>Back to Categories</button
        >
    {/if}

    {#if $page === "categoryForm"}
        <CategoryForm />
    {/if}

    {#if $page === "resourceForm"}
        <ResourceForm />
    {/if}
</main>

<!-- Update Store
list.update((state) => [...state, item]); -->

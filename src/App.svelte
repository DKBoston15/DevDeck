<script lang="ts">
    import browser from "webextension-polyfill";
    import CategoryList from "./modules/CategoryList.svelte";
    import DevList from "./modules/DevList.svelte";
    import CategoryForm from "./modules/CategoryForm.svelte";
    import { page } from "./stores";
    // function change() {
    //     browser.storage.local.set({});
    // }
</script>

<main>
    {#if $page === "category"}
        <CategoryList />
    {/if}

    {#if $page === "category"}
        <DevList />
    {/if}

    {#if $page === "categoryForm"}
        <CategoryForm />
    {/if}

    <button on:click={() => page.set("categoryForm")} />
</main>

<!-- Update Store
list.update((state) => [...state, item]); -->

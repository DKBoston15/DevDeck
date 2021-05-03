<script lang="ts">
    import browser from "webextension-polyfill";
    import CategoryList from "./modules/CategoryList.svelte";
    import DevList from "./modules/DevList.svelte";
    import CategoryForm from "./modules/CategoryForm.svelte";

    let page = "category";
    // function change() {
    //     browser.storage.local.set({});
    // }
</script>

<main>
    {#if page === "category"}
        <CategoryList />
    {/if}

    {#if page === "category"}
        <DevList />
    {/if}
    <CategoryForm />
</main>

<!-- Update Store
list.update((state) => [...state, item]); -->

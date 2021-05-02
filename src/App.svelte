<script lang="ts">
    import browser from "webextension-polyfill";
    import CardList from "./components/CardList.svelte";
    import { list } from "./stores";

    function change() {
        browser.storage.local.set({});
    }
    const addItem = () => {
        let item = {
            name: "Offical React Docs",
            link: "https://reactjs.org/docs/getting-started.html",
            category: "React",
            id: 1,
            tags: ["react", "start"]
        };
        list.update((state) => [...state, item]);
    };
</script>

<main>
    <CardList />
    <button on:click={addItem}> Add a number </button>
</main>

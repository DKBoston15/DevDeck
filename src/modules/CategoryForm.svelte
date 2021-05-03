<script>
    import Input from "../components/Input.svelte";
    import IconSelect from "../components/IconSelect.svelte";
    import { page, categories, newCategory } from "../stores";

    const addCategory = () => {
        $categories.push({ ...$newCategory });
        $categories = $categories;
        page.set("category");
    };
</script>

<h2>Add Resource</h2>
<form on:submit|preventDefault={addCategory}>
    <Input />
    <IconSelect />
    <button type="submit"> Submit </button>
</form>

<style>
</style>

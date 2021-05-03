<script>
    import Input from "../components/Input.svelte";
    import IconSelect from "../components/IconSelect.svelte";
    import { categories, newCategory } from "../stores";

    const addResource = () => {
        $categories.push({ ...$newCategory });
        $categories = $categories;
    };
</script>

<h2>Add Resource</h2>
<form on:submit|preventDefault={addResource}>
    <Input />
    <IconSelect />
    <button type="submit"> Submit </button>
</form>

<!-- <p>
    {JSON.stringify($newCategory)}
</p> -->
<style>
</style>

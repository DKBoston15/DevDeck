<script>
    import { page, resources } from "../stores/stores";
    let title;
    let category;
    let link;
    const addResource = () => {
        for (let i = 0; i < $resources.length; i++) {
            if ($resources[i].title === category) {
                let newResource = {
                    name: title,
                    link,
                    id: Math.floor(Math.random() * 100000000),
                    tags: []
                };
                $resources[i].resources.push({ ...newResource });
                $resources = $resources;
                page.set("resource");
            }
        }
    };
</script>

<h2>Add Resource</h2>
<form on:submit|preventDefault={addResource}>
    <input bind:value={title} />
    <select name="category" id="category" bind:value={category}>
        <option value="React">React</option>
        <option value="Typescript">Typescript</option>
        <option value="Git">Git</option>
        <option value="Visual Studio Code">Visual Studio Code</option>
    </select>
    <input bind:value={link} />
    <button type="submit"> Submit </button>
</form>

<style>
</style>

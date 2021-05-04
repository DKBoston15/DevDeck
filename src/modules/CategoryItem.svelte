<script lang="ts">
    import { selectedResource, page } from "../stores/stores";
    export let icon: string;
    export let title: string;

    const changeResource = ({ title }) => {
        selectedResource.set(title);
        page.set("resource");
    };
    console.log(icon);
</script>

<div on:click={changeResource({ title })}>
    <img src={icon} alt={title} />
</div>

<style>
    div {
        cursor: pointer;
    }
</style>

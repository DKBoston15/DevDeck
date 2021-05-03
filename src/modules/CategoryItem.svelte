<script lang="ts">
    import { selectedResource } from "../stores";
    export let icon: string;
    export let title: string;

    const changeResource = ({ title }) => {
        selectedResource.set(title);
    };
</script>

<div on:click={changeResource({ title })}>
    <img src={icon} alt={title} />
</div>

<style>
    div {
        cursor: pointer;
    }
</style>

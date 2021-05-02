<script lang="ts">
    export let name;
    export let link;
    export let category;
</script>

<div class="card">
    <a target="_blank" href={link}>
        {name}
    </a>
    <p>{category}</p>
</div>

<style>
    .card {
        border-radius: 10px;
        border-top: 2px solid #00b4d8;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
        width: 25em;
        height: 5em;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 1em 0em;
        color: white;
        background: #222228;
    }
    p {
        color: gray;
    }
    a {
        color: white;
        text-decoration: none; /* no underline */
    }
</style>

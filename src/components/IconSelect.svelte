<script lang="ts">
    import { newCategory } from "../stores";

    let selectedIcon = "";

    const randId = (size) => {
        const nums = Array.from({ length: 10 }, (_, i) =>
            String.fromCharCode("0".charCodeAt(0) + i)
        );
        const chars = [...nums];
        const rand = (length) => Math.floor(Math.random() * length);
        return Array.from(
            { length: size },
            () => chars[rand(chars.length)]
        ).join("");
    };

    function onChange(event) {
        selectedIcon = event.currentTarget.value;
        $newCategory.icon = selectedIcon;
        $newCategory.id = Math.floor(Math.random() * 100000000);
    }
</script>

<label>
    <input
        on:change={onChange}
        type="radio"
        name="amount"
        value="https://res.cloudinary.com/domqwdeiu/image/upload/v1620015915/devdeck_icons/person_bz8dnn.png"
    />
    <img
        src="https://res.cloudinary.com/domqwdeiu/image/upload/v1620015915/devdeck_icons/person_bz8dnn.png"
        alt="person"
    />
</label>
<label>
    <input
        on:change={onChange}
        type="radio"
        name="amount"
        value="https://res.cloudinary.com/domqwdeiu/image/upload/v1620015915/devdeck_icons/star_fy7jn0.png"
    />
    <img
        src="https://res.cloudinary.com/domqwdeiu/image/upload/v1620015915/devdeck_icons/star_fy7jn0.png"
        alt="star"
    />
</label>
<label>
    <input
        on:change={onChange}
        type="radio"
        name="amount"
        value="https://res.cloudinary.com/domqwdeiu/image/upload/v1620015915/devdeck_icons/code_a1zs64.png"
    />
    <img
        src="https://res.cloudinary.com/domqwdeiu/image/upload/v1620015915/devdeck_icons/code_a1zs64.png"
        alt="code"
    />
</label>

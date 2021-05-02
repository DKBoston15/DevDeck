import { writable } from "svelte/store";

export const list = writable([
    {
        name: "Offical React Docs",
        link: "https://reactjs.org/docs/getting-started.html",
        category: "React",
        id: 1,
        tags: ["react", "start"]
    },
    {
        name: "Thinking in React",
        link: "https://reactjs.org/docs/thinking-in-react.html",
        category: "React",
        id: 2,
        tags: ["react", "logic", "layout", "thinking"]
    },
    {
        name: "React Loops",
        link: "https://reactjs.org/docs/lists-and-keys.html",
        category: "React",
        id: 3,
        tags: ["react", "loop"]
    }
]);

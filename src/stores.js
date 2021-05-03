import { writable } from "svelte/store";

// export const list = writable([
//     {
//         name: "Offical React Docs",
//         link: "https://reactjs.org/docs/getting-started.html",
//         category: "React",
//         id: 1,
//         tags: ["react", "start"]
//     },
//     {
//         name: "Thinking in React",
//         link: "https://reactjs.org/docs/thinking-in-react.html",
//         category: "React",
//         id: 2,
//         tags: ["react", "logic", "layout", "thinking"]
//     },
//     {
//         name: "React Loops",
//         link: "https://reactjs.org/docs/lists-and-keys.html",
//         category: "React",
//         id: 3,
//         tags: ["react", "loop"]
//     }
// ]);

export const categories = writable([
    {
        id: 1,
        title: "Typescript",
        icon:
            "https://res.cloudinary.com/domqwdeiu/image/upload/v1620003880/devdeck_icons/typescript_dbdmof.png"
    },
    {
        id: 2,
        title: "React",
        icon:
            "https://res.cloudinary.com/domqwdeiu/image/upload/v1620003880/devdeck_icons/react_yzime3.png"
    },
    {
        id: 3,
        title: "Vue",
        icon:
            "https://res.cloudinary.com/domqwdeiu/image/upload/v1620003880/devdeck_icons/vue_dq3ap9.png"
    },
    {
        id: 4,
        title: "Javascript",
        icon:
            "https://res.cloudinary.com/domqwdeiu/image/upload/v1620003880/devdeck_icons/javascript_lr94uk.png"
    },
    {
        id: 5,
        title: "Visual Studo Code",
        icon:
            "https://res.cloudinary.com/domqwdeiu/image/upload/v1620003880/devdeck_icons/vsc_pf3a6f.png"
    },
    {
        id: 6,
        title: "Git",
        icon:
            "https://res.cloudinary.com/domqwdeiu/image/upload/v1620003880/devdeck_icons/git_crhc43.png"
    }
]);

export const selectedResource = writable("React");

export const resources = writable([
    {
        id: 1,
        title: "React",
        resources: [
            {
                name: "Offical React Docs",
                link: "https://reactjs.org/docs/getting-started.html",
                id: 1,
                tags: ["react", "start"]
            },
            {
                name: "Thinking in React",
                link: "https://reactjs.org/docs/thinking-in-react.html",
                id: 2,
                tags: ["react", "logic", "layout", "thinking"]
            },
            {
                name: "React Loops",
                link: "https://reactjs.org/docs/lists-and-keys.html",
                id: 3,
                tags: ["react", "loop"]
            }
        ]
    },
    {
        id: 2,
        title: "Typescript",
        resources: [
            {
                name: "Offical Typescript Docs",
                link: "https://reactjs.org/docs/getting-started.html",
                id: 1,
                tags: ["react", "start"]
            },
            {
                name: "Thinking in Typescript",
                link: "https://reactjs.org/docs/thinking-in-react.html",
                id: 2,
                tags: ["react", "logic", "layout", "thinking"]
            },
            {
                name: "Typescript Loops",
                link: "https://reactjs.org/docs/lists-and-keys.html",
                id: 3,
                tags: ["react", "loop"]
            }
        ]
    },
    {
        id: 3,
        title: "Vue",
        resources: [
            {
                name: "Offical Vue Docs",
                link: "https://reactjs.org/docs/getting-started.html",
                id: 1,
                tags: ["react", "start"]
            },
            {
                name: "Thinking in Vue",
                link: "https://reactjs.org/docs/thinking-in-react.html",
                id: 2,
                tags: ["react", "logic", "layout", "thinking"]
            },
            {
                name: "Vue Loops",
                link: "https://reactjs.org/docs/lists-and-keys.html",
                id: 3,
                tags: ["react", "loop"]
            }
        ]
    },
    {
        id: 4,
        title: "Javascript",
        resources: [
            {
                name: "Offical Javascript Docs",
                link: "https://reactjs.org/docs/getting-started.html",
                id: 1,
                tags: ["react", "start"]
            },
            {
                name: "Thinking in Javascript",
                link: "https://reactjs.org/docs/thinking-in-react.html",
                id: 2,
                tags: ["react", "logic", "layout", "thinking"]
            },
            {
                name: "Javascript Loops",
                link: "https://reactjs.org/docs/lists-and-keys.html",
                id: 3,
                tags: ["react", "loop"]
            }
        ]
    },
    {
        id: 5,
        title: "Visual Studo Code",
        resources: [
            {
                name: "Offical Visual Studo Code Docs",
                link: "https://reactjs.org/docs/getting-started.html",
                id: 1,
                tags: ["react", "start"]
            },
            {
                name: "Thinking in Visual Studo Code",
                link: "https://reactjs.org/docs/thinking-in-react.html",
                id: 2,
                tags: ["react", "logic", "layout", "thinking"]
            },
            {
                name: "Visual Studo Code Loops",
                link: "https://reactjs.org/docs/lists-and-keys.html",
                id: 3,
                tags: ["react", "loop"]
            }
        ]
    },
    {
        id: 6,
        title: "Git",
        resources: [
            {
                name: "Offical Git Docs",
                link: "https://reactjs.org/docs/getting-started.html",
                id: 1,
                tags: ["react", "start"]
            },
            {
                name: "Thinking in Git",
                link: "https://reactjs.org/docs/thinking-in-react.html",
                id: 2,
                tags: ["react", "logic", "layout", "thinking"]
            },
            {
                name: "Git Loops",
                link: "https://reactjs.org/docs/lists-and-keys.html",
                id: 3,
                tags: ["react", "loop"]
            }
        ]
    }
]);

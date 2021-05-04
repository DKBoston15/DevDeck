import { categories, resources } from "./stores/stores";
import { get } from "svelte/store";
import { defaultCategories } from "./default_data/defaultCategories";
import { defaultResources } from "./default_data/defaultResources";

const categoriesStore = get(categories);
const resourcesStore = get(resources);
export const setDefaultCategories = () => {
    categories.set(defaultCategories);
    categoriesStore = categories;
};
export const setDefaultResources = () => {
    resources.set(defaultResources);
    resourcesStore = resources;
};
export const setCategories = () => {
    console.log("Setting Categories");
};
export const setResources = () => {
    console.log("Setting Resources");
};

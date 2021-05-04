import { writable } from "svelte/store";

const defaultData = [{ title: "Todo" }];

export const categories = writable([]);

export const selectedResource = writable("React");

export const resources = writable([]);

export const newCategory = writable({ id: 0, title: "", icon: "" });

export const page = writable("category");

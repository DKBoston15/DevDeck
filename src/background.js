import browser from "webextension-polyfill";
import {
    setDefaultCategories,
    setDefaultResources,
    setCategories,
    setResources
} from "./utils.js";
console.log("Background Loaded");

// localStorage.setItem("s", JSON.stringify({ title: "s" }));
// chrome.storage.sync.set({ a: "s" }, function () {});
// chrome.storage.sync.set({ b: "a" }, function () {});
// chrome.storage.sync.set({ c: "d" }, function () {});
chrome.storage.sync.get(null, function (data) {
    if (data["categories"]) {
        setCategories();
    } else {
        setDefaultCategories();
    }
    if (data["resources"]) {
        setResources();
    } else {
        setDefaultResources();
    }
});

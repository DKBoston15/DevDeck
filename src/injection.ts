import browser from "webextension-polyfill";

const key = "background";
browser.storage.local.get(key).then((data) => {});

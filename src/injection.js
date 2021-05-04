import browser from "webextension-polyfill";

const key = "background";
browser.storage.local.get(key).then((data) => {});
// chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
//     console.log(response.farewell);
// });

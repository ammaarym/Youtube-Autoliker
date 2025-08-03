// print that content.js is running
console.log("Popup.js is running!");

async function getCurrentTab(){
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

// add a listener for when the button is clicked
const btn = document.querySelector('button[id = "inject-btn"]');
// mark function as async in order to use an await
btn.addEventListener("click", async () => {
    // find current tab
    const curr_tab = await getCurrentTab();
    // inject content.js into that tab
    chrome.scripting.executeScript({
        target: {tabId: curr_tab.id},
        files: ["content.js"],
    })
    console.log("Content.js injected!");
})


async function toggleDirection() {
  let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: () => {
      // The body of this function will be executed as a content script inside the current page

      if (document.documentElement.dir === "" || document.documentElement.dir === "ltr") {
        document.documentElement.dir = "rtl";
      } else {
        document.documentElement.dir = "ltr";
      }
    },
  });
}

toggleHtmlDirButton.addEventListener("click", toggleDirection);

toggleDirection();

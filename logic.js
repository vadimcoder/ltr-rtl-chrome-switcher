function execute(payload) {
  return async function () {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      function: payload
    });
  }
}

intlSwitcher_direction.addEventListener("click", execute(() => {
  const container = document.querySelector(".rtl-container-for-chrome") ?? document.body;

  if (container.style.direction === "" || container.style.direction === "ltr") {
    container.style.direction = "rtl";
  } else {
    container.style.direction = "ltr";
  }
}));

intlSwitcher_writingModeHorizontalTb.addEventListener("click", execute(() => {
  document.body.style.writingMode = "horizontal-tb";
}));

intlSwitcher_writingModeVerticalLrRl.addEventListener("click", execute(() => {
  const {style} = document.body;

  style.writingMode = style.writingMode === "vertical-lr" ? "vertical-rl" : "vertical-lr";
}));

intlSwitcher_writingModeInherit.addEventListener("click", execute(() => {
  document.body.style.writingMode = "initial";
}));

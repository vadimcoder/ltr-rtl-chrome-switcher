chrome.commands.onCommand.addListener((command) => {
  if (command === "toggleDirection") {
    // Unfortunately we cannot modify DOM in services workers

    // document.body.dir = document.body.dir === "" ? "rtl" : "";

    // client.postMessage({
    //   msg: "Hey I just got a fetch from you!",
    // });
  }
});

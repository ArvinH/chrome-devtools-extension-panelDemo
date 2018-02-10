(function() {
  chrome.devtools.inspectedWindow.eval(
    "document.title",
    function (result, isException) {
      if (!isException && result) {
        chrome.devtools.panels.create("Panel Demo",
          "logo.png",
          "Panel.html",
          function (panel) {
            // code invoked on panel creation
          }
        );
      }
    }
  );
})();
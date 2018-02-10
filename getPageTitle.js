(function() {
    const port = chrome.extension.connect({
        name: "Devtools.js Communication"
    });
    const inspectedWindowId = chrome.devtools.inspectedWindow.tabId;

    // Listen to messages from the background page
    port.onMessage.addListener(function (message) {
        if (message.action === "reloadExtension" && message.updatedTabId === inspectedWindowId) {
            const appNode = document.querySelector('#app');
            removeHTMLChilds(appNode);
            getPageTitle();
        }
    });
    
    function getPageTitle() {
        chrome.devtools.inspectedWindow.eval(
            "document.title",
            function (result, isException) {
                const appNode = document.querySelector('#app');
                const titleWrapper = document.createElement("div");
                const title = document.createTextNode(result); 
                titleWrapper.appendChild(title);
                appNode.appendChild(title);
            }
        );
    }

    function removeHTMLChilds(HTMLNode) {
        while (HTMLNode.firstChild) {
            HTMLNode.removeChild(HTMLNode.firstChild);
        }
    }
    // init
    getPageTitle();
})();


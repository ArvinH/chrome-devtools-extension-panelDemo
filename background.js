chrome.runtime.onConnect.addListener(function (port) {
    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
        if (changeInfo.status === 'complete') {
            reloadExtension(port, tabId);
        }
    });

    function reloadExtension(port, tabId) {
        const message = { action: "reloadExtension", updatedTabId: tabId };
        port.postMessage(message);
    }
});
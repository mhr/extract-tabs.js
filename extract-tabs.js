/*
`tsv` is a string of tab-separated url and title.
`raw` is an ordered array with JSON of {url: url, title: title}.
*/

function zip(x, y) {
    return x.map(function (element, i) {
        return [element, y[i]];
    });
}

/*
using items array of urls and titles,
create a TSV string of url, title format
*/
function toTSV(items) {
    var tsv = "";
    for (item of items) {
        tsv += item.url+"\t"+item.title+"\n"
    }
    return tsv;
}

function extractTabsOther() {
    var historyApp = document.getElementById("history-app").shadowRoot;
    var mainContainer = historyApp.getElementById("main-container");
    var content = mainContainer.getElementsByTagName("iron-pages")[0];
    var syncedDevices = content.getElementsByTagName("history-synced-device-manager")[0].shadowRoot;
    var syncedDeviceList = syncedDevices.getElementById("synced-device-list");
    var historySyncedDeviceCard = syncedDeviceList.getElementsByTagName("history-synced-device-card")[0].shadowRoot;
    var historyItemContainer = historySyncedDeviceCard.getElementById("history-item-container");
    var ironCollapse = historyItemContainer.getElementsByTagName("iron-collapse")[0];
    var tabItemList = ironCollapse.getElementsByTagName("div")[0];
    var tabItems = tabItemList.getElementsByClassName("item-container");
    var items = [];
    for (tabItem of tabItems) {
        item = tabItem.getElementsByClassName("website-title")[0];
        var page = {};
        page["title"] = item.title;
        page["url"] = item.href;
        items.push(page);
    }
    return {"tsv": toTSV(items), "raw": items}
}

function extractTabsMe() {
    var names = [].slice.call(document.getElementsByClassName("name"));
    var urls = [].slice.call(document.getElementsByClassName("url"));
    var items = [];
    for (item of zip(names, urls)) {
        var page = {};
        page["title"] = item[0].innerHTML;
        page["url"] = item[1].innerHTML;
        items.push(page);
    }
    return {"tsv": toTSV(items), "raw": items}
}

// http://stackoverflow.com/a/33946647/1024501
function copy(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.setAttribute("id", "dummy_id");
    document.getElementById("dummy_id").value = text;
    dummy.select();
    console.log(document.execCommand("copy"));
}

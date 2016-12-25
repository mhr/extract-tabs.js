# extract-tabs.js
This script allows you to extract your tabs programmatically.

# usage
Go to chrome://history/syncedTabs or chrome://inspect/#pages and paste [extract-tabs.js](extract-tabs.js) in the console.

If you want to back up your synced tabs, paste one of the following two lines into your console:
- `extractTabsOther()["tsv"]`
- `extractTabsOther()["raw"]`

If you want to back up the tabs on your current device's browser, paste one of the following two lines into your console:
- `extractTabsMe()["tsv"]`
- `extractTabsMe()["raw"]`

N.b.
`tsv` is a string of tab-separated url and title.
`raw` is an ordered array with JSON of {url: url, title: title}.

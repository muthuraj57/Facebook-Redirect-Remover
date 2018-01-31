
chrome.webRequest.onBeforeRequest.addListener(
    function(reqDetails) {
        // console.log('hitted url'+reqDetails.url);
        var orginalUrl = getQueryParam("u", reqDetails.url)
        if (orginalUrl != null) {
            // console.log('original url: '+orginalUrl)
            return {redirectUrl: orginalUrl};
        }
    },
    {urls: ["*://*.facebook.com/*"]},
    ["blocking"]
);


//credit: https://stackoverflow.com/a/901144/3423932
function getQueryParam(paramName, url) {
    paramName = paramName.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + paramName + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
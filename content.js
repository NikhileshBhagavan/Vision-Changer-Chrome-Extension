/*var a = document.querySelector("body");
let colo_bg = a.style.backgroundColor;
let colo_text = a.style.color;*/
//none in js indiactes intentional absence of value
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "start") {
            if (document.querySelector("html").style.filter == "invert(100%)") {
                document.querySelector("html").style.filter = "none";

            } else {
                document.querySelector("html").style.filter = "invert(100%)";

            }




        }
    }
);
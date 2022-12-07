// ==UserScript==
// @name         PMT 3.0
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Swaps the URL so the PDF view is nice without non of the nonsense PMT add
// @author       @Gea_Retar
// @match        https://www.physicsandmathstutor.com/pdf-pages/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=physicsandmathstutor.com
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var url = window.location.href;
    var newUrl = url.split("=")[1];
    var Url_1 = newUrl.replace(/%3A%2F%2F/g, "://");
    var Url_2 = Url_1.replace(/%2F/g, "/");
    var Url_3 = Url_2.replace(/%2520/g, "%20");
    location.replace(Url_3);
})();
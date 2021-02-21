// ==UserScript==
// @name         Piwigo-hide-rating
// @namespace    https://github.com/baumrasen/userscripts
// @version      0.3
// @description  hide the rating div in piwigo, if you still rated the image
// @author       baumrasen
// @include      http*://*/picture.php?/*
// @downloadURL  https://raw.githubusercontent.com/baumrasen/userscripts/main/piwigo-hide-rating.js
// @updateURL    https://raw.githubusercontent.com/baumrasen/userscripts/main/piwigo-hide-rating.js
// @supportURL   https://github.com/baumrasen/userscripts/issues
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // englisch and german only
    let regexp = /update|aktualisieren/;

    if (document.getElementById('updateRate').innerHTML.match(regexp))
    {
        document.getElementById('rating').style.display = 'none';
    }


})();

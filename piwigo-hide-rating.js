// ==UserScript==
// @name         Piwigo-hide-rating
// @namespace    https://github.com/baumrasen/userscripts
// @version      0.1
// @description  hide the rating div in piwigo, if you still rated the image
// @author       baumrasen
// @include      http*://*/picture.php?/*
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

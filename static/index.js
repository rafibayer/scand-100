/* eslint-disable */
'use strict';
(() => {

    window.onload = () => {
        let countryHeaders = document.getElementsByClassName("countries")[0].childNodes;
        countryHeaders.forEach(header => {
            header.addEventListener("click", () => {
                showCountryArticle(header.innerText);
            })
        });
    }

    function showCountryArticle(countryName) {
        let allArticles = Array.from(document.getElementsByClassName("country"));
        allArticles.forEach(article => article.classList.add("hidden"));

        let articleToShowID = countryName+"Article";
        document.getElementById(articleToShowID).classList.remove("hidden");
    }

})();
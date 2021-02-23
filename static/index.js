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
        let articleToShowID = countryName+"Article";

        allArticles.forEach(article => {
            if (article.id != articleToShowID)
            article.classList.add("hidden")
        });

        document.getElementById(articleToShowID).classList.toggle("hidden");
    }

})();
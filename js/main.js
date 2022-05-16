'use strict';

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}


ready(() => {

    // Button Scroll Up
    let btnUp = document.querySelector('.btn-up');

    btnUp.addEventListener("click", (e) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        e.preventDefault();
    });


    // Change view
    let btnList = document.getElementById('js-list'),
        btnGrid = document.getElementById('js-grid'),
        btnsView = document.getElementsByClassName('view-link'),
        btnsViewWrap = document.querySelector('.filter-view'),
        cards = document.getElementById('js-card-wrap'),
        cardsCols = cards.getElementsByClassName('cards-col');

    for (let btnView of btnsView) {
        btnView.addEventListener("click", function(e) {

            let current = btnsViewWrap.getElementsByClassName("active");
            current[0].className = current[0].className.replace("active", "");
            this.className += " active";

            e.preventDefault();
        });
    }


    btnList.addEventListener("click", () => {
        listView();
    });

    btnGrid.addEventListener("click", () => {
        gridView();
    });


    function listView() {
        //console.log("list");
        cards.className = "cards cards-list";

        for (let cardsCol of cardsCols) {
            cardsCol.className = "cards-col col-md-6 col-lg-12";
        }
    }

    function gridView() {
        //console.log("grid"); 
        cards.className = "cards cards-grid";

        for (let cardsCol of cardsCols) {
            cardsCol.className = "cards-col col-md-6 col-lg-4";
        }
    }
});

$('[data-toggle="tooltip"]').tooltip();
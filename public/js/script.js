document.addEventListener("DOMContentLoaded", function () {

    const category = document.querySelectorAll(".type, .subtype");

    category.forEach(function(item) {
        item.addEventListener('mouseover', function () {
            // console.log('this is a ' + item.className);

         item.classList.add("active");

        });
        item.addEventListener('mouseout', function () {
            item.classList.remove("active");
        });

    });

    // const exTitle = document.querySelectorAll(".exTitle");
    // document.querySelectorAll("[data-definition]").forEach(term => {
    //     const key = term.dataset.definitions;

    //     term.querySelector(".def").textContent = 
    //     definitions[key];

    // });

});




// when hovering on type/subtype, display the def element within the div by toggling display to active
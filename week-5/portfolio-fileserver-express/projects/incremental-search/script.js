import { arrayOfCountries } from "./arr.js";

let index = -1;
var input = $("input");
var results = $("#results");

$(document)
    .on("focus", function () {
        results.show();
    })
    .on("blur", function () {
        results.hide();
    });

input
    .on("input", function () {
        const inputValue = input.val();
        findAndShowResults(inputValue);
    })

    .on("keydown", function (e) {
        if (e.keyCode === 40) {
            console.log(
                "results.children().eq(index): ",
                results
                    .children()
                    .eq(index + 1)
                    .text()
            );
            results.children().eq(index).css("background-color", "white");
            index++;
            results
                .children()
                .eq(index)
                .css("background-color", "grey")
                .css("width", "150px")
                .css("border-radius", "5px");
            if (index === 3) {
                index = -1;
            }
            let selectedCountry = results.children().eq(index).text();
            input.val(selectedCountry);
        } else if (e.keyCode === 38) {
            console.log(
                "results.children().eq(index): ",
                results
                    .children()
                    .eq(index - 1)
                    .text()
            );
            results.children().eq(index).css("background-color", "white");
            index--;
            results
                .children()
                .eq(index)
                .css("background-color", "grey")
                .css("width", "150px")
                .css("border-radius", "5px");
            if (index === -1) {
                index = 3;
            }
            let selectedCountryreverse = results.children().eq(index).text();
            input.val(selectedCountryreverse);
        } else if (e.keyCode === 13) {
            results.hide();
        }
    });

results.on("click", function (e) {
    input.val(e.target.outerText);
    console.log(e.target.outerText);
});

function findResults(str) {
    const filteredCountries = arrayOfCountries.filter((country) => {
        let countryToLowerCase = country.toLowerCase();
        let strToLowerCase = str.toLowerCase();
        return countryToLowerCase.startsWith(strToLowerCase);
    });
    return filteredCountries.slice(0, 4);
}

function findAndShowResults(val) {
    const foundResults = findResults(val); 
    if (val === 0) {
        results.hide(); 
    }
    if (val === []) {
        results.hide();
    }
    renderResults(foundResults);
}

function renderResults(filteredCountries) {
    const finalHTML = getResultsHtml(filteredCountries);
    results.html(finalHTML);
}

function getResultsHtml(filteredCountries) {
    let htmlString = "";
    if (filteredCountries.length === 0) {
        return "No results";
    } else {
        for (let i = 0; i < filteredCountries.length; i++) {
            htmlString += "<div>" + filteredCountries[i] + "</div>";
        } return htmlString;
    }
}

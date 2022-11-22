(function () {
    var results = $("#results");
    let index = -1;
    var input = $("input");
    var timeout;
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
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                findAndShowResults(inputValue);
            }, 250);
            
            
        })
    
        .on("keydown", function (e) {
            if (e.keyCode === 40) { //down
                results.children().eq(index).css("background-color", "rgba(0,0,0,0)");
                index++;
                if (results.children().length === index) {
                    index = results.children().length - 1;
                } 
                results
                    .children()
                    .eq(index)
                    .css("background-color", "grey")
                    .css("width", "145px")
                    .css("border-radius", "5px");
                let selectedCountry = results.children().eq(index).text();
                input.val(selectedCountry);
            } else if (e.keyCode === 38) { //up
                results.children().eq(index).css("background-color", "rgb(85, 119, 85)");
                index--;
                if (index < 0) {
                    index = 0;
                }
                results
                    .children()
                    .eq(index)
                    .css("background-color", "grey")
                    .css("width", "145px")
                    .css("border-radius", "5px");
                let selectedCountryreverse = results.children().eq(index).text();
                input.val(selectedCountryreverse);
            } else if (e.keyCode === 13) {
                results.hide();
            }
        });
    
    results.on("click", function (e) {
        input.val(e.target.outerText);
        // console.log(e.target.outerText);
        results.hide();
    });
    
    if(input.val() === 0){
        document.location.reload();
    }
    
    // function findResults(str) {
    //     const filteredCountries = arrayOfCountries.filter((country) => {
    //         let countryToLowerCase = country.toLowerCase();
    //         let strToLowerCase = str.toLowerCase();
    //         return countryToLowerCase.startsWith(strToLowerCase);
    //     });
    //     return filteredCountries.slice(0, 4);
    // }
    
    function findAndShowResults(value) {
        $.ajax({
            url: "https://spicedworld.herokuapp.com/",
            data: {
                q: value,
            },
            success: function (data) {
                // do something with the data here
                // console.log("data", data);
                // console.log("$value", value);
                // console.log('$("input").val()', $("input").val());
                //check if $value is the same as what is currently in the input field
                renderResults(data); 
                if (data === 0) {
                    results.hide(); 
                }
                if (data === []) {
                    results.hide();
                }
            },
        });
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
})();
// DO NOT TOUCH ----------------------------------------------------------------
// 1. Initialize a handlebars.templates object in case it does not exist
Handlebars.templates = Handlebars.templates || {};

// 2. Select the handlebars templates from your HTML document
var templates = document.querySelectorAll(
    'script[type="text/x-handlebars-template"]'
);

// 3. Loop over the templates and compile them
Array.prototype.slice.call(templates).forEach(function (script) {
    Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
});
// ------------------------------------------------------------------------
//
const input = document.querySelector(".search-input");
const select = document.querySelector(".type");
const button = document.querySelector(".search-button");
var artistsSection = document.getElementById("artists-section");

// const resultContainer = document.querySelector(".results");
let nextUrl = "";
let itemsAdjusted;
button.addEventListener("click", () => {
    $.ajax({
        url: "https://spicedify.herokuapp.com/spotify",
        data: {
            q: input.value,
            type: select.value,
        },
        success: function (data) {
            const results = data.artists || data.albums;
            const items = results.items;
            nextUrl = results.next;
            console.log(data);
            console.log(items);
            itemsAdjusted = items.map((item) => {
                return { name: item.name, imageUrl: item.images[0]?.url };
            });
            
            var artistsHtml = Handlebars.templates.artistsTemplate({itemsAdjusted});
            artistsSection.innerHTML = artistsHtml;
            console.log("Items: ",itemsAdjusted);
        },
        error: function (error) {
            console.log(error);
        },
    });
});

let timerID;
document.addEventListener('scroll', () => {
    console.log('scrollY: ', window.scrollY);
    console.log('clientHeight: ', document.body.clientHeight);
    console.log('inner height: ', window.innerHeight);
    clearTimeout(timerID);
    timerID = setTimeout(()=>{
        if (window.scrollY + window.innerHeight >= document.body.clientHeight){
            console.log('SCROLLEND');
            $.ajax({
                url: nextUrl,
                success: function (data) {
                    const results = data.artists || data.albums;
                    results.nextUrl;
                    nextUrl = results.next;
                    if(nextUrl === null){
                        return;
                    }
                    const items = results.items;
                    itemsAdjusted = items.map((item) => {
                        return { name: item.name, imageUrl: item.images[0]?.url };
                    });
                    var artistsHtml = Handlebars.templates.artistsTemplate({itemsAdjusted});
                    artistsSection.innerHTML = artistsHtml;
                    console.log("Items: ",itemsAdjusted);
                    
                },
                error: function (error) {
                    console.log(error);
                },
            }, 2000);        
        }
    });
});
const input = document.querySelector(".search-input");
const select = document.querySelector(".type");
const button = document.querySelector(".search-button");
const resultContainer = document.querySelector(".results");
let nextUrl = "";
let htmlString = "";
// let makingRequest = false;

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
            const itemsAdjusted = items.map((item) => {
                return { name: item.name, imageUrl: item.images[0]?.url };
            });
            renderHtml(itemsAdjusted, false);
            //
        },
        error: function (error) {
            console.log(error); //log the error for now
        },
    });
});

// const secondbutton = document.getElementById("secondbtn");
// secondbutton.addEventListener("click", () => {
//     $.ajax({
//         url: nextUrl,
//         success: function (data) {
//             const results = data.artists || data.albums;
//             const items = results.items;
//             console.log(data);
//             console.log(items);
//             const itemsAdjusted = items.map((item) => {
//                 return { name: item.name, imageUrl: item.images[0]?.url };
//             });
//             renderHtml(itemsAdjusted, true);
//         },
//         error: function (error) {
//             console.log(error);
//         },
//     });
// });

function renderHtml(itemsAdjusted, shouldAppend) {
    htmlString = "";
    if (itemsAdjusted.length === 0) {
        return "No results";
    } else {    
        for (let i = 0; i < itemsAdjusted.length; i++) {
            if (itemsAdjusted[i].imageUrl) {
                htmlString +=
                    '<div class="result-item">' +
                    "<p>" +
                    itemsAdjusted[i].name +
                    "</p>" +
                    "<br>" +
                    '<img src="' +
                    itemsAdjusted[i].imageUrl +
                    '">' +
                    "</div>";
            } else {
                htmlString +=
                    '<div class="result-item">' + "<p>" +
                    itemsAdjusted[i].name +
                    "</p>" +
                    '<img id="spotify" src="./Spotify.png" alt="spotify" height="30">' +
                    "</div>";
            }
        }
        if (shouldAppend === true) {
            // do append something to innerHTML when shouldAppend is true;
            resultContainer.innerHTML += htmlString;
        } else {
            // otherwise replace whole innerHTML
            resultContainer.innerHTML = htmlString;
        }
    }
}

let timerID;
document.addEventListener('scroll', () => {
    console.log('scrollY: ', window.scrollY);
    console.log('clientHeight: ', document.body.clientHeight);
    console.log('inner height: ', window.innerHeight);
    clearTimeout(timerID);
    timerID = setTimeout(()=>{
        if (window.scrollY + window.innerHeight >= document.body.clientHeight){// calculation with scrollY, clientHeight and innerHeight
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
                    const itemsAdjusted = items.map((item) => {
                        return { name: item.name, imageUrl: item.images[0]?.url };
                    });
                    renderHtml(itemsAdjusted, true);
                },
                error: function (error) {
                    console.log(error);
                },
            }, 2000);        
        }
    });
});
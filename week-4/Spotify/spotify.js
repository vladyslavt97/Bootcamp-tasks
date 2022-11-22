const input = document.querySelector(".search-input");
const select = document.querySelector(".type");
const button = document.querySelector(".search-button");
const resultContainer = document.querySelector(".results");
let nextUrl = '';
let htmlString = "";
button.addEventListener("click", () => {
    $.ajax({
        url: "https://spicedify.herokuapp.com/spotify", // from spiced /// lesson notes
        data: {
            q: input.value, //value of input field
            type: select.value, //value of select
        },
        success: function (data) {
            // searching  for Artist: data.albums DOES NOT exist;
            // searching  for albums: data.artist DOES NOT exist;
            const results = data.artists || data.albums;
            const items = results.items;
            nextUrl = results.next;
            console.log(data);
            console.log(items); //log data at first
            const itemsAdjusted = items.map((item) => {
                return { name: item.name, imageUrl: item.images[0]?.url };
            });
            console.log("itemsAdjusted", itemsAdjusted);
            htmlString = "";
            if (itemsAdjusted.length === 0) {
                return "No results";
            } else {
                for (let i = 0; i < itemsAdjusted.length; i++) {
                    htmlString = '<div class="result-item">' + '<p>' + itemsAdjusted[i].name + '</p>' + '<img src="' + itemsAdjusted[i].imageUrl + '">' + '</div>';
                    // <img src="" alt=""></img>
                    // console.log(htmlString);
                    resultContainer.innerHTML += htmlString;
                }
            } 
            

            //
        },
        error: function (error) {
            console.log(error); //log the error for now
        },
    });
});



const secondbutton = document.getElementById('secondbtn');
secondbutton.addEventListener('click', ()=> {// additional 
    $.ajax({
        url: 'https://spicedify.herokuapp.com/spotify?query=jackson&type=artist&offset=20&limit=20',
        success: function (data) {
            const results = data.artists || data.albums;
            const items = results.items;
            console.log(data);
            console.log(items); //log data at first
            const itemsAdjusted = items.map((item) => {
                return { name: item.name, imageUrl: item.images[0]?.url };
            });
            console.log("itemsAdjusted", itemsAdjusted);
            // htmlString = "";
            if (itemsAdjusted.length === 0) {
                return "No results";
            } else {
                for (let i = 0; i < itemsAdjusted.length; i++) {
                    htmlString = '<div class="result-item">' + '<p>' + itemsAdjusted[i].name + '</p>' + '<img src="' + itemsAdjusted[i].imageUrl + '">' + '</div>';
                    // <img src="" alt=""></img>
                    console.log(htmlString);
                    resultContainer.innerHTML += htmlString;
                }
            } 
            

            //
        },
        error: function (error) {
            console.log(error); //log the error for now
        },
    });

});

    

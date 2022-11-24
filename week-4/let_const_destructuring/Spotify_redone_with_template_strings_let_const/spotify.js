const input = document.querySelector(".search-input");
const select = document.querySelector(".type");
const button = document.querySelector(".search-button");
const resultContainer = document.querySelector(".results");
let nextUrl = "";
let htmlString = "";

const searchButton = () => {
    $.ajax({
        url: "https://spicedify.herokuapp.com/spotify",
        data: {
            q: input.value,
            type: select.value,
        },
        success: (data) => {
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
        error: (error) => {
            console.log(error); //log the error for now
        },
    });
};

select.addEventListener('keydown', (event)=> {
    if(event.key === 'Enter'){
        console.log(event);
        searchButton();
    }
});
input.addEventListener('keydown', (event)=> {
    if(event.keyCode === 13){
        console.log(event);
        searchButton();
    }
});
button.addEventListener("click", searchButton);


const renderHtml = (itemsAdjusted, shouldAppend) => {
    htmlString = "";
    if (itemsAdjusted.length === 0) {
        return "No results";
    } else {    
        for (let i = 0; i < itemsAdjusted.length; i++) {
            if (itemsAdjusted[i].imageUrl) {
                htmlString += `
                    <div class="result-item">
                        <p> ${itemsAdjusted[i].name}</p><br>
                        <img src="${itemsAdjusted[i].imageUrl}">
                    </div>`;
            } else {
                htmlString += `
                    <div class="result-item">
                        <p>${itemsAdjusted[i].name}</p>
                        <img id="spotify" src="./Spotify.png" alt="spotify" height="30">
                    </div>`;
            }
        }
        if (shouldAppend === true) {
            resultContainer.innerHTML += htmlString;
        } else {
            resultContainer.innerHTML = htmlString;
        }
    }
};

let timerID;
document.addEventListener('scroll', () => {
    clearTimeout(timerID);
    timerID = setTimeout(()=>{
        if (window.scrollY + window.innerHeight >= document.body.clientHeight){
            $.ajax({
                url: nextUrl,
                success: (data) => {
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
                error: (error) => {
                    console.log(error);
                },
            }, 2000);        
        }
    });
});